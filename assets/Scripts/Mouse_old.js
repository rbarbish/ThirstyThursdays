var mJeep : GameObject;
function Update()
{
	if (Input.GetButtonUp("Fire1"))
	{
		var x = Input.mousePosition.x;
		var z = Input.mousePosition.y;
		var pos = new Vector3(x, 0, z);
		var Jeep : GameObject = Instantiate(mJeep, pos,Quaternion.identity);
	}
}