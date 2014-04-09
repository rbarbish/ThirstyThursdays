var moveIndex : float = 10; 
var destroyIndex : int = 0; 
function Update () 
{
	var translation : float = Time.deltaTime * moveIndex;
	transform.Translate (0, -translation, 0);
	
}
function OnCollisionEnter(hit : Collision)
{
	if (hit.gameObject.name == "Vehicle" || hit.gameObject.name == "stall")
	{
		gameObject.name = "stall";
		gameObject.GetComponent("MoveSatellite").enabled = false;;
	}
	else if (hit.gameObject.name == "Terrain" || hit.gameObject.name == "stall")
	{
		gameObject.name = "stall";
		gameObject.GetComponent("MoveSatellite").enabled = false;
	}
}
