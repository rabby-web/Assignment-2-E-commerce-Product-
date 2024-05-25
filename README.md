# Instructions

There is some instruction for how you can run this project on you local computer. follow step by step.

### Clone this project

Fist you need to clone this project repository. Open your command prompt and run the below command to clone the repository. Then open it with VS Code IDE.

```
git clone https://github.com/rabby4/product-management.git
```

After open this project with VS Code you will see all the file. But you can't run this immediately. You need to install necessary packages. To install all the packages, open CMD/git bash in vs code to `ctrl + j` or you can open external CMD/git bash. Then you can simply run this below command.

```
npm i
```

When all packages installation would be done you need to add a PORT and need to connect your project with MongoDB database. To connect MongoDB database, create a `.env` file on the root folder and paste the below code.

```
PORT=5000
DB_URL=add mongoDB connection string from MongoDB Atlas
```

On the `DB_URL` you need to add a connection string from MongoDB Atlas.

### How to get Connection String from MongoBD Atlas

If you know how to get Connection String from MongoBD Atlas then you can skip this step. And if you don't know then follow step by step:

- https://www.mongodb.com/ Go to this link and Sign In with google.
- Then create a user from `Database Access` tab for access to the database (when create a user try to give the role as Atlas Admin)

  ![alt text](https://i.ibb.co/FDJDqQK/Clusters-Cloud-Mongo-DB-Cloud.png)
  ![alt text](https://i.ibb.co/QPrSTPY/Database-Access-Cloud-Mongo-DB-Cloud.png)

- Then again go to `Database` tab and then click `Connect` option
- When you click the `connect` option you will see several option. click on the `Drivers` option.

  ![alt text](https://i.ibb.co/NtcJt6F/Clusters-Cloud-Mongo-DB-Cloud-2.png)

- When you click the `Drivers` option then you will see more step. Here you will see Connection String on the step 3. Just copy it and paste it on the `.env` file without any spaces.

  ![alt text](https://i.ibb.co/CWYZ5fx/Clusters-Cloud-Mongo-DB-Cloud-4.png)

- Replace `<username>` and `<password>`. When you create a user on Database Access option. You entered a username and password. just add these here. Remember, don't remove any letter or symbol from the connection string and be careful when you replace the username and password. Then give a Database name before question `?` mark and after `.mongodb.net/`. Here is an example.

```
mongodb+srv://<username>:<password>@clusterPort.mongodb.net/databaseName?othersPort
```

If you follow step by step then congratulations. Now you can run your project using below command

```
npm run start:dev
```
