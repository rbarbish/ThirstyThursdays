var moveIndex : float = 10; 
var destroyIndex : int = 130; 
var highwayPosition : int = 1;
function Update () 
{
	var translation : float = Time.deltaTime * moveIndex;
	transform.Translate (0, 0, translation);
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
