const os=require('os');
const cluster=require('cluster');

if(cluster.isMaster)
{
	for(let i=0;i<os.cpus().length;i++)
	{
	 cluster.fork();//instance of app will run on different cpus
	}

}