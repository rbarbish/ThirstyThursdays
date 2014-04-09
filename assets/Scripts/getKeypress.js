private var mSelectedIndex = 1;
var Jeep : GUITexture;
var Horse : GUITexture;
var Tank : GUITexture;
var Train : GUITexture;
var Baby : GUITexture;
var Sattelite : GUITexture;
var Funeral : GUITexture;
var Popo : GUITexture;
var Jeep2 : GUITexture;
var Horse2 : GUITexture;
var Tank2 : GUITexture;
var Train2 : GUITexture;
var Baby2 : GUITexture;
var Sattelite2 : GUITexture;
var Funeral2 : GUITexture;
var Popo2 : GUITexture;

function select (index : int)
{
	Jeep.enabled = true;
	Horse.enabled = true;
	Tank.enabled = true;
	Train.enabled = true;
	Baby.enabled = true;
	Funeral.enabled = true;
	Popo.enabled = true;
	Sattelite.enabled = true;
	Jeep2.enabled = false;
	Horse2.enabled = false;
	Tank2.enabled = false;
	Train2.enabled = false;
	Baby2.enabled = false;
	Funeral2.enabled = false;
	Popo2.enabled = false;
	Sattelite2.enabled = false;
	switch(index)
	{
		case 1:
		 Jeep.enabled = !(Jeep.enabled);
		 Jeep2.enabled = !(Jeep2.enabled);
		 break;
		case 2:
		 Horse.enabled = !(Horse.enabled);
		 Horse2.enabled = !(Horse2.enabled);
		 break;
		case 3:
		 Tank.enabled = !(Tank.enabled);
		 Tank2.enabled = !(Tank2.enabled);
		 break;
		case 4:
		 Train.enabled = !(Train.enabled);
		 Train2.enabled = !(Train2.enabled);
		 break;
		case 5:
		 Baby.enabled = !(Baby.enabled);
		 Baby2.enabled = !(Baby2.enabled);
		 break;
		case 6:
		 Sattelite.enabled = !(Sattelite.enabled);
		 Sattelite2.enabled = !(Sattelite2.enabled);
		 break;
		case 7:
		 Funeral.enabled = !(Funeral.enabled);
		 Funeral2.enabled = !(Funeral2.enabled);
		 break;
		case 8:
		 Popo.enabled = !(Popo.enabled);
		 Popo2.enabled = !(Popo2.enabled);
		 break;
		
	}
}
function Start()
{
	select(1);
	mSelectedIndex = 1;
	GameObject.Find("Scene").GetComponent("Mouse").item = 1;
}
function Update () 
{
	var level = GameObject.Find("Scene").GetComponent("spawnHelperItems").level;
   if (Input.GetKeyDown("1"))
   {
   	select(1);
   	mSelectedIndex = 1;
      GameObject.Find("Scene").GetComponent("Mouse").item = 1;
   }
   if (Input.GetKeyDown("2"))
   {
   	select(2);
   	mSelectedIndex = 2;
       GameObject.Find("Scene").GetComponent("Mouse").item = 2;
   }
   if (Input.GetKeyDown("3") && level > 1)
   {
   	select(3);
   	mSelectedIndex = 3;
       GameObject.Find("Scene").GetComponent("Mouse").item = 3;
   }
   if (Input.GetKeyDown("4") && level > 2)
   {
   	select(4);
   	mSelectedIndex = 4;
       GameObject.Find("Scene").GetComponent("Mouse").item = 4;
   }
   if (Input.GetKeyDown("5") && level > 3)
   {
   	select(5);
   	mSelectedIndex = 5;
       GameObject.Find("Scene").GetComponent("Mouse").item = 5;
   }
   if (Input.GetKeyDown("6") && level > 4)
   {
   	select(6);
   	mSelectedIndex = 6;
       GameObject.Find("Scene").GetComponent("Mouse").item = 6;
   }
   if (Input.GetKeyDown("7") && level > 5)
   {
   	select(7);
   	mSelectedIndex = 7;
       GameObject.Find("Scene").GetComponent("Mouse").item = 7;
   }
   if (Input.GetKeyDown("8") && level > 6 
   && GameObject.Find("3rd Person Controller").GetComponent("ThirdPersonController").enabled == true
   && GameObject.Find("3rd Person Controller").GetComponent("PlayerScripts").dead == false)
   {
   	select(8);
   	mSelectedIndex = 8;
	GameObject.Find("Scene").GetComponent("Mouse").item = 8;
   }
}