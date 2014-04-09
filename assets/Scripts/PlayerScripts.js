var walkTimer : float = 0;
var waitTimer : float = 0;
var dead : boolean = false;
var lives : int;
var beer1: GUITexture;
var beer2: GUITexture;
var beer3: GUITexture;
var beer4: GUITexture;
var beer5: GUITexture;
var beer6: GUITexture;
var beer7: GUITexture;
var beer8: GUITexture;
var beer9: GUITexture;
var blood: GUITexture;
var count: int = 0;
var rightdir: boolean = true;
function Start()
{
	lives = 3;
}

function OnControllerColliderHit(hit : ControllerColliderHit)
{
	Debug.Log(hit.collider.gameObject.name);
	if (hit.collider.gameObject.name == "Vehicle" && GameObject.Find("WinText1").GetComponent("GUIText").enabled == false)
	{
		dead = true;
		hit.collider.gameObject.name = "stall";
		lives--;
		if (lives == 0)
		{
			//game over stuff
			GameObject.Find("quit").GetComponent("GUITexture").enabled = true;
			GameObject.Find("GameOver").GetComponent("GUIText").enabled = true;
			GameObject.Find("GameOverSub").GetComponent("GUIText").enabled = true;
			GameObject.Find("restart").GetComponent("GUITexture").enabled = true;
		}
		if (lives >= 1)
		{
			switch (lives)
			{
				case 1:
				beer2.enabled = false;
				break;
				case 2:
				beer3.enabled = false;
				break;
				case 3:
				beer4.enabled = false;
				break;
				case 4:
				beer5.enabled = false;
				break;
				case 5:
				beer6.enabled = false;
				break;
				case 6:
				beer7.enabled = false;
				break;
				case 7:
				beer8.enabled = false;
				break;
				case 8:
				beer9.enabled = false;
				break;
			}
		GameObject.Find("LoseText").GetComponent("GUIText").enabled = true;
		GameObject.Find("TryAgain").GetComponent("GUITexture").enabled = true;
		}
		gameObject.GetComponent("ThirdPersonCamera").enabled = false;
		GameObject.Find("blood").GetComponent("GUITexture").enabled = true;
		
	}

}

function OnCollisionEnter(hit : Collision)
{
	
	if (hit.collider.gameObject.name == "Vehicle" && GameObject.Find("WinText1").GetComponent("GUIText").enabled == false)
	{
		dead = true;
		hit.collider.gameObject.name = "stall";
		lives--;
		if (lives == 0)
		{
			//game over stuff
			GameObject.Find("quit").GetComponent("GUITexture").enabled = true;
			GameObject.Find("GameOver").GetComponent("GUIText").enabled = true;
			GameObject.Find("GameOverSub").GetComponent("GUIText").enabled = true;
			GameObject.Find("restart").GetComponent("GUITexture").enabled = true;
		}
		if (lives >= 1)
		{
			switch (lives)
			{
				case 1:
				beer2.enabled = false;
				break;
				case 2:
				beer3.enabled = false;
				break;
				case 3:
				beer4.enabled = false;
				break;
				case 4:
				beer5.enabled = false;
				break;
				case 5:
				beer6.enabled = false;
				break;
				case 6:
				beer7.enabled = false;
				break;
				case 7:
				beer8.enabled = false;
				break;
				case 8:
				beer9.enabled = false;
				break;
			}
		GameObject.Find("LoseText").GetComponent("GUIText").enabled = true;
		GameObject.Find("TryAgain").GetComponent("GUITexture").enabled = true;
		}
		gameObject.GetComponent("ThirdPersonCamera").enabled = false;
		GameObject.Find("blood").GetComponent("GUITexture").enabled = true;
		
	}
}

function OnTriggerEnter(other : Collider)
{
	if (other.gameObject.name == "TopWall" 
	&& GameObject.Find("blood").GetComponent("GUITexture").enabled == false
	&& GameObject.Find("StartText1").GetComponent("GUIText").enabled == false)
	{
		GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonCamera").enabled = false;
		GameObject.Find("Bip001 Pelvis").GetComponent("SkinnedMeshRenderer").enabled = false;
		gameObject.GetComponent("ThirdPersonController").enabled = false;
		gameObject.GetComponent("Animation").enabled = false;
		
		GameObject.Find("quit").GetComponent("GUITexture").enabled = true;
		if (GameObject.Find("Scene").GetComponent("spawnHelperItems").level == 7)
		{
			Application.LoadLevel("Win");
		}
		else
		{
			GameObject.Find("Next").GetComponent("GUITexture").enabled = true;
			GameObject.Find("WinText1").GetComponent("GUIText").enabled = true;
			GameObject.Find("WinText2").GetComponent("GUIText").enabled = true;
			GameObject.Find("Scene").GetComponent("spawnHelperItems").level += 1;
			var level = GameObject.Find("Scene").GetComponent("spawnHelperItems").level;
			var questionBlock = "Question" + (level + 1);
			GameObject.Find(questionBlock).GetComponent("GUITexture").enabled = false;
		}
	}
	if(other.gameObject.name == "Shroom" )
	{
		lives++;
		if (lives >= 2)
		{
			switch (lives)
			{
				case 2:
				beer2.enabled = true;
				break;
				case 3:
				beer3.enabled = true;
				break;
				case 4:
				beer4.enabled = true;
				break;
				case 5:
				beer5.enabled = true;
				break;
				case 6:
				beer6.enabled = true;
				break;
				case 7:
				beer7.enabled = true;
				break;
				case 8:
				beer8.enabled = true;
				break;
				case 9:
				beer9.enabled = true;
				break;
			}
		}
		Destroy(other.gameObject, 0);
	}
	else if (other.gameObject.name == "Syringe")
	{
		//increase speed
		gameObject.GetComponent("ThirdPersonController").walkSpeed += 2.5;
		gameObject.GetComponent("ThirdPersonController").runSpeed += 1.3;
		gameObject.GetComponent("ThirdPersonController").trotSpeed += 1.3;
		Destroy(other.gameObject, 0);
	}
}
function Update () 
{
	if (dead == true)
	{
		GameObject.Find("StartText1").GetComponent("GUIText").enabled = false;
		GameObject.Find("StartText2").GetComponent("GUIText").enabled = false;
		GameObject.Find("3rd Person Controller").transform.position.y += 10;
	}
	if (waitTimer < 3 && waitTimer >= 0)
	{
		waitTimer += Time.deltaTime;
	}
	else if (waitTimer > -3)
	{
		waitTimer -= Time.deltaTime;
	}
	if (waitTimer > 3)
	{
		gameObject.GetComponent("ThirdPersonController").enabled = true;
		gameObject.GetComponent("Animation").enabled = true;
		gameObject.GetComponent("ThirdPersonController").runSpeed = 8;
		gameObject.GetComponent("ThirdPersonController").walkSpeed = 3;
		gameObject.GetComponent("ThirdPersonController").trotSpeed = 4;
		waitTimer = -1;
		GameObject.Find("StartText1").GetComponent("GUIText").enabled = false;
		GameObject.Find("StartText2").GetComponent("GUIText").enabled = true;
		var level = GameObject.Find("Scene").GetComponent("spawnHelperItems").level;
		var levelName = "Level" + level;
		GameObject.Find(levelName).GetComponent("GUITexture").enabled = false;
	}
	else if (waitTimer < -3)
	{
		gameObject.Find("StartText2").GetComponent("GUIText").enabled = false;
	}
	if (GameObject.Find("LoseText").GetComponent("GUIText").enabled == true 
	|| GameObject.Find("GameOver").GetComponent("GUIText").enabled == true)
	{
		if (blood.transform.position.y > .2)
		{
			blood.transform.position.y -= .005;
			if (count < 40 && rightdir == true)
			{
				blood.transform.position.x += .005;
			}
			
			if (count < 40 && rightdir == false)
			{
				blood.transform.position.x -= .005;
			}
			if (count == 40)
			{
				count = 0;
				rightdir = !rightdir;
			}
			
			count++;	
		}
		
	}
	walkTimer += Time.deltaTime;
	if (walkTimer > .5)
	{
		if (gameObject.GetComponent("ThirdPersonController").walkSpeed > 0)
		{
			gameObject.GetComponent("ThirdPersonController").walkSpeed -= 0.1;
		}
		else if (gameObject.GetComponent("ThirdPersonController").walkSpeed < 0)
		{
			gameObject.GetComponent("ThirdPersonController").walkSpeed = 0;
		}
		if (gameObject.GetComponent("ThirdPersonController").runSpeed >0)
		{
			gameObject.GetComponent("ThirdPersonController").runSpeed -= 0.1;
		}
		else if (gameObject.GetComponent("ThirdPersonController").runSpeed < 0)
		{
			gameObject.GetComponent("ThirdPersonController").runSpeed = 0;
		}
		if (gameObject.GetComponent("ThirdPersonController").trotSpeed > 0)
		{
			gameObject.GetComponent("ThirdPersonController").trotSpeed -= 0.1;
		}
		else if (gameObject.GetComponent("ThirdPersonController").trotSpeed < 0)
		{
			gameObject.GetComponent("ThirdPersonController").trotSpeed = 0;
		}
		walkTimer = 0;
	}
}