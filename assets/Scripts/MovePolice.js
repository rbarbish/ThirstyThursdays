var moveIndex : float = 10; 
var destroyIndex : int = 130; 
var highwayPosition : int = 1;
var playerChar : GameObject;
private var currentRotation : float = 0;
private var currentZ : float;
function Update () 
{
	var translation : float = Time.deltaTime * moveIndex;
	var newRotation : float = 0.0;
	if (highwayPosition == 1)
	{
		if(transform.position.x > playerChar.transform.position.x)
		{
			transform.Translate (0, 0, -translation);
		}
	
		if (transform.position.x < playerChar.transform.position.x)
		{
			transform.Translate (0, 0, translation);
		}
	
		if (transform.position.z > playerChar.transform.position.z)
		{
			transform.Translate (translation, 0, 0);
			newRotation = transform.position.z - playerChar.transform.position.z;
			if (newRotation != currentRotation)
			{
				transform.Rotate(0, -(currentRotation - newRotation), 0, Space.Self);
				currentRotation = newRotation;
			}
		}
		if (transform.position. z < playerChar.transform.position.z)
		{
			transform.Translate (-translation, 0, 0);
			newRotation = transform.position.z - playerChar.transform.position.z;
			if (newRotation != currentRotation)
			{
				transform.Rotate(0, -(currentRotation - newRotation), 0, Space.Self);
				currentRotation = newRotation;
			}
		}
	}
	else if (highwayPosition == 2)
	{
		if(transform.position.x > playerChar.transform.position.x)
		{
			transform.Translate (0, 0, translation);
		}
	
		if (transform.position.x < playerChar.transform.position.x)
		{
			transform.Translate (0, 0, -translation);
		}
	
		if (transform.position.z > playerChar.transform.position.z)
		{
			transform.Translate (-translation, 0, 0);
			newRotation = playerChar.transform.position.z - transform.position.z;
			if (newRotation != currentRotation)
			{
				transform.Rotate(0, -(currentRotation - newRotation), 0, Space.Self);
				currentRotation = newRotation;
			}
		}
		if (transform.position. z < playerChar.transform.position.z)
		{
			transform.Translate (translation, 0, 0);
			newRotation = playerChar.transform.position.z - transform.position.z;

			if (newRotation != currentRotation)
			{
				transform.Rotate(0, -(currentRotation - newRotation), 0, Space.Self);
				currentRotation = newRotation;
			}
			
		}
	}
	
}

function OnCollisionEnter(hit : Collision)
{
	if (hit.gameObject.name == "Vehicle" || hit.gameObject.name == "stall")
	{
		gameObject.name = "stall";
		gameObject.GetComponent("MovePolice").enabled = false;
	}
}


function Start()
{
	playerChar = GameObject.Find("3rd Person Controller");
	if (playerChar.transform.position.z != transform.position.z)
	{
		currentRotation = transform.position.z - playerChar.transform.position.z;
		if (highwayPosition == 1)
		{
			transform.Rotate(0,currentRotation,0, Space.Self);
		}
		if (highwayPosition == 2)
		{
			transform.Rotate(0,currentRotation,0, Space.Self);

		}
	}
	currentZ = playerChar.transform.position.z;
}