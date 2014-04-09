function OnMouseDown () 
{
	for(var block : GameObject in GameObject.Find("Scene").GetComponent("spawnHelperItems").blockArray)
	{
		Destroy(block, 0);
		
	}
	GameObject.Find("Scene").GetComponent("spawnHelperItems").blockArray.Clear();
	for (var vehicle : GameObject in GameObject.Find("Scene").GetComponent("Mouse").vehicles)
	{
		Destroy(vehicle, 0);
	}
	GameObject.Find("Scene").GetComponent("Mouse").vehicles.Clear();
	for ( var syringe : GameObject in GameObject.FindGameObjectsWithTag("Syringe"))
	{
		Destroy(syringe,0);
	}
	if(GameObject.Find("Shroom") != null)
	{
		Destroy(GameObject.Find("Shroom"),0);
	}
	if (GameObject.Find("Scene").GetComponent("Mouse").item == 8)
	{
		GameObject.Find("Scene").GetComponent("Mouse").item = 1;
		GameObject.Find("Scene").GetComponent("getKeypress").select(1);
		GameObject.Find("Scene").GetComponent("getKeypress").mSelectedIndex = 1;
	}
	GameObject.Find("Listener").GetComponent("AudioSource").Stop();
	GameObject.Find("Listener2").GetComponent("AudioSource").Stop();
	GameObject.Find("LeftWall").transform.position.x = 75.0353;
	GameObject.Find("LeftWall").transform.position.z = 99.7085;
	GameObject.Find("RightWall").transform.position.x = 124.8074;
	GameObject.Find("RightWall").transform.position.z = 99.7085;
	GameObject.Find("TopWall").transform.position.x = 99.90546;
	GameObject.Find("TopWall").transform.position.z = 113.1467;
	GameObject.Find("BottomWall").transform.position.x = 90.90546;
	GameObject.Find("BottomWall").transform.position.z = 86.796;
	GameObject.Find("3rd Person Controller").GetComponent("PlayerScripts").dead = false;
	GameObject.Find("Bip001 Pelvis").GetComponent("SkinnedMeshRenderer").enabled = true;
	GameObject.Find("3rd Person Controller").transform.position.x = 99.86056;
	GameObject.Find("3rd Person Controller").transform.position.z = 87.60256;
	GameObject.Find("3rd Person Controller").transform.position.y = 0.9963526;
	GameObject.Find("blood").GetComponent("GUITexture").enabled = false;
	GameObject.Find("LoseText").GetComponent("GUIText").enabled = false;
	GameObject.Find("WinText1").GetComponent("GUIText").enabled = false;
	GameObject.Find("WinText2").GetComponent("GUIText").enabled = false;
	GameObject.Find("TryAgain").GetComponent("GUITexture").enabled =false;
	GameObject.Find("Next").GetComponent("GUITexture").enabled = false;
	GameObject.Find("quit").GetComponent("GUITexture").enabled = false;
	GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonController").runSpeed = 8;
	GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonController").walkSpeed = 3;
	GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonController").trotSpeed = 4;
	GameObject.Find("3rd Person Controller").GetComponent("PlayerScripts").waitTimer = 0;
	GameObject.Find("3rd Person Controller").GetComponent("PlayerScripts").walkTimer = 0;
	GameObject.Find("StartText1").GetComponent("GUIText").enabled = true;
	GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonCamera").enabled = true;
	GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonController").enabled = false;
	GameObject.Find("3rd Person Controller").GetComponent("Animation").enabled = false;
	GameObject.Find("blood").GetComponent("GUITexture").transform.position.x = 0.4;
	GameObject.Find("blood").GetComponent("GUITexture").transform.position.y = 1.73;
	GameObject.Find("Scene").GetComponent("spawnHelperItems").runOnce = false;
	var level = GameObject.Find("Scene").GetComponent("spawnHelperItems").level;
	var levelName = "Level" + level;
	GameObject.Find(levelName).GetComponent("GUITexture").enabled = true;
	GameObject.Find("Scene").GetComponent("Mouse").proCanSpawn = true;
	GameObject.Find("Scene").GetComponent("Mouse").trainCanSpawn = true;
	GameObject.Find("Scene").GetComponent("Mouse").delayProTime = 8;
	GameObject.Find("Scene").GetComponent("Mouse").delayTrainTime = 4;

}