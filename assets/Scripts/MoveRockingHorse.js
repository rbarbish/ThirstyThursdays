var moveIndex : float = 10; 
var destroyIndex : int = 130; 
var highwayPosition : int = 1;
var rotationType = 0;
function Update () 
{
	var translation : float = Time.deltaTime * moveIndex;
	transform.Translate(0,  -translation, 0);
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
	
}
function OnCollisionEnter(hit : Collision)
{
	if (hit.gameObject.name == "Vehicle" || hit.gameObject.name == "stall")
	{
		gameObject.name = "stall";
		gameObject.GetComponent("MoveRockingHorse").enabled = false;
	}
	
}

