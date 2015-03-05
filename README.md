# AWS Auto Scaling Handson demo App
## EC2 instance user-data
```sh
#!/bin/bash

cd /home/ec2-user/as_app
git clone https://github.com/conmame/as_demo_app.git
cd as_demo_app
npm install
node bin/www &
```
