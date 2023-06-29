import * as fs from "fs";
import * as path from "path";

export abstract class AppKernel {

    async autoInject(folderPath: string) {
        try {
            let files: string[] = fs.readdirSync(folderPath);

            let autoImported = [];

            for (let file of files) {
                let filePath = path.join(folderPath, file);

                if (fs.statSync(filePath).isDirectory()) {
                    let recur = await this.autoInject(filePath);
                    recur.forEach((classTmp) => {
                        autoImported.push(classTmp);
                    });
                }

                if (!filePath.endsWith('.ts')) {
                    continue;
                }

                let module = await import('../' + filePath);
                let exportedKeys = Object.keys(module);

                for (let key of exportedKeys) {
                    let exported = module[key];

                    if (typeof exported === 'function') {
                        let newInstance = new exported();
                        autoImported.push(newInstance);
                    }
                }
            }

            return autoImported;
        } catch (err) {
            console.log(err);
            console.log(`ERROR : Something wrong happened in autoInject. Target : ${folderPath}`);

            return [];
        }
    }
}
