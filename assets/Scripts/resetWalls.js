var runTimes = 0;
function Update () 
{
		var screenWidth = camera.main.pixelWidth;
		var screenHeight = camera.main.pixelHeight;
		var screenSpace = Camera.main.WorldToScreenPoint(GameObject.Find("3rd Person Controller").transform.position);
		GameObject.Find("LeftWall").transform.position = camera.main.ScreenToWorldPoint(Vector3(0,screenHeight/2, screenSpace.z));
		GameObject.Find("LeftWall").transform.position.y = 0;
		GameObject.Find("RightWall").transform.position =camera.main.ScreenToWorldPoint(Vector3(screenWidth,screenHeight/2, screenSpace.z));
		GameObject.Find("RightWall").transform.position.y = 0;
		GameObject.Find("TopWall").transform.position = camera.main.ScreenToWorldPoint(Vector3(screenWidth/2, screenHeight,screenSpace.z));
		GameObject.Find("TopWall").transform.position.y = 0;
		GameObject.Find("BottomWall").transform.position = camera.main.ScreenToWorldPoint(Vector3(screenWidth/2,0, screenSpace.z));
		GameObject.Find("BottomWall").transform.position.y = 0;
		GameObject.Find("BottomWall").transform.position.z -= 1;
		runTimes++;

}