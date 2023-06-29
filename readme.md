# Symfode

Welcome.

Let me introduce you Symfode.

The aim of this project is having a base for building backend (API) for futur personnal project.

This "framework" (big word indeed) is something build with having the symfony architecture in head (you understand the name? Yeah, funny I know.)

In this framework, you can find :
- Dependency Injection for Controller (create the controller, and magic will happen for routing etc...)
- Dependency Injection for Job (create a job, and magic blablabla read above)
- Command (create a command, and you can test it. it's a little CLI)

I also need to :
- Make Entity (With Prisma)
- Make Repository (With Prisma)
- Make Serializer (Maybe with annotation ? Symfony Style.)
- Make JSDoc (Maybe with annotation ? Symfony Style.)
- Make Production developpement working

Also, optimize etc... Urgh, lot of work !

But, you can use it.

## How ?

- `git clone` this project.
- `npm install` this project. (maybe error will happen... who knows!)
- `npm run dev` : it's alive !
- Want to try some command ? `ts-node bin/cli.ts <commandName>`
- Want to try some job ? Update .env for having `JOBS='1'` and see console.

I'm open for every feature you have in mind !
