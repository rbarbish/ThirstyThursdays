var level : int = 1;
var mShroom : GameObject;
var mSyringe : GameObject;
var mLeftWall : GameObject;
var mRightWall : GameObject;
var mTopWall : GameObject;
var mBottomWall : GameObject;
var mObjectSpacer = 2;
var beer4: GUITexture;
var beer5: GUITexture;
var beer6: GUITexture;
var beer7: GUITexture;
var beer8: GUITexture;
var beer9: GUITexture;
var trafficBlock : GameObject;
var numberOfBlocks = 100;
var trafficBlockZ : float = 101.9488;
var runOnce : boolean = false;
var blockArray = new Array();
var leftPosition : float;
var rightPosition : float;
var topPosition : float;
var bottomPosition : float;
function Update () 
{
	if (runOnce == false)
	{
	var leftWallPosition : float = GameObject.Find("LeftWall").transform.position.x + 2;
	var rightWallPosition : float = GameObject.Find("RightWall").transform.position.x -2;
	var xPosition = leftWallPosition;
	var blocksUsed = 0;
	while (xPosition < rightWallPosition&& blocksUsed < numberOfBlocks)
	{
		//50% chance of spawning
		var placeBlock : float =Random.Range(0,10);
		if (placeBlock >= 5)
		{
			spawnBlock(xPosition);

			blocksUsed++;
		}
		xPosition += 1;
	}
	
	Debug.Log("X: (" + leftPosition + ", " + rightPosition + ") Z: (" + topPosition +", " + bottomPosition + ")");
	var shroomX = Random.Range(leftPosition,rightPosition);
	var shroomZ = Random.Range(bottomPosition, topPosition);
	var shroom = Instantiate(mShroom, new Vector3(shroomX, .05, shroomZ), mShroom.transform.rotation);
	shroom.name = "Shroom";
	
	var middlePosition = (topPosition - bottomPosition)/2 + bottomPosition;
	var syringeX = Random.Range(leftPosition,rightPosition);
	var syringeZ = Random.Range(middlePosition, topPosition);
	var syringeA = Instantiate(mSyringe, new Vector3(syringeX, 0.05, syringeZ), mSyringe.transform.rotation);
	syringeA.name = "Syringe";
	syringeX = Random.Range(leftPosition,rightPosition);
	syringeZ = Random.Range(bottomPosition, middlePosition);
	var syringeB = Instantiate(mSyringe, new Vector3(syringeX, 0.05, syringeZ), mSyringe.transform.rotation);
	syringeB.name = "Syringe";
	runOnce = true;
	}
}
function Start()
{
	leftPosition= mLeftWall.transform.position.x + mObjectSpacer;
	rightPosition = mRightWall.transform.position.x - mObjectSpacer;
	topPosition = mTopWall.transform.position.z -mObjectSpacer;
	bottomPosition = mBottomWall.transform.position.z + mObjectSpacer;
	beer4.enabled = false;
	beer5.enabled = false;
	beer6.enabled = false;
	beer7.enabled = false;
	beer8.enabled = false;
	beer9.enabled = false;
}
function spawnBlock(xPosition : float)
{
	var block = Instantiate(trafficBlock, new Vector3(xPosition, 0, trafficBlockZ), trafficBlock.transform.rotation);
	block.name = "TrafficBlock";
	blockArray.Push(block);
	
}