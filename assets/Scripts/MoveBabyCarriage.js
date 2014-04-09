var moveIndex : float = 10; 
var destroyIndex : int = 130; 
var highwayPosition : int = 1;
var rotationType = 0;
var rotationAmount = 0;
function Update () 
{
	var translation : float = Time.deltaTime * moveIndex;
	transform.Translate (0, 0, -translation);
	//transform.position.x += moveIndex;
	if (highwayPosition == 1)
	{
		if (transform.position.x >  destroyIndex)
		{
			Destroy (gameObject);
		}
	}
	else if(highwayPosition == 2)
	{
		if (transform.position.x <  destroyIndex)
		{
			Destroy (gameObject);
		}
	}
	if (rotationType == 0)
	{
		transform.Rotate(0, 1, 0);
		rotationAmount++;
		if (rotationAmount == 50)
		{
			rotationType = 1;
		}
	}
	else if (rotationType == 1)
	{
		transform.Rotate(0, -1, 0);
		rotationAmount--;
		if (rotationAmount == -50)
		{
			rotationType = 0;
		}
		
	}
	
}
function OnCollisionEnter(hit : Collision)
{
	if (hit.gameObject.name == "Vehicle" || hit.gameObject.name == "stall")
	{
		gameObject.name = "stall";
		gameObject.GetComponent("MoveBabyCarriage").enabled = false;
	}
}

