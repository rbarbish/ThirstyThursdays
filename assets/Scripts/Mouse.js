var mJeep : GameObject;
var mObject2 : GameObject;
var mObject3 : GameObject;
var mObject4 : GameObject;
var mObject5 : GameObject;
var mObject6 : GameObject;
var mObject7 : GameObject;
var mObject8 : GameObject;
private var delayTimeObject : float = 1;
private var delayTimeLane : float = 0.5;
private var objectTimer : float = 0;
private var laneTimer = new Array();
private var runLaneTimer = new Array();
private var runObjectTimer : boolean = false;
private var delayTrainTime : float = 4;
private var delayProTime : float = 8;
private var proCanSpawn : boolean = true;
private var trainCanSpawn : boolean = true;
private var changeInTime : float;
var item : int = 1;
var p;
var vehicles = new Array();

function Start()
{
	for (var index = 0; index < 5; index++)
	{
		runLaneTimer[index] = false;
		laneTimer[index] = 0.0;
	}
}
function Update()
{
	changeInTime = Time.deltaTime;
	var level = GetComponent("spawnHelperItems").level;
	if (Input.GetButtonUp("Fire1") && !runObjectTimer)
	{
		//code adapted from Mole420 of Unity forums
		screenSpace = Camera.main.WorldToScreenPoint(transform.position);
		var offest = transform.position - Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, screenSpace.z));
		offest.x = 0;
		p = Camera.main.ScreenToWorldPoint(Vector3(Input.mousePosition.x, Input.mousePosition.y, screenSpace.z));
		var spawnPoint : Vector3;
		//space one
		var lane: int;
		Debug.Log(p.z);
		if (p.z >= 93.92 && p.z < 95.96 && !runLaneTimer[0])
		{
			lane = 0;
			spawnVehicle(lane);
		}
		else if (p.z >= 95.97 && p.z < 97.95 && !runLaneTimer[1])
		{
			lane = 1;
			spawnVehicle(lane);
		}
		else if (p.z >=97.96 && p.z < 99.937 && !runLaneTimer[2])
		{
			lane = 2;
			spawnVehicle(lane);
		}
		else if (p.z >= 99.937 && p.z < 101.924 && !runLaneTimer[3])
		{
			lane = 3;
			spawnVehicle(lane);
		}
		else if (p.z >=101.925 && p.z < 103.935 && !runLaneTimer[4])
		{
			lane = 4;
			spawnVehicle(lane);
		}
		else if (p.z >= 103.936 && p.z < 105.899 && !runLaneTimer[4])
		{
			lane = 5;
			spawnVehicle(lane);
		}
	}
	else if (runObjectTimer)
	{
		objectTimer +=  Time.deltaTime;
		if (objectTimer > delayTimeObject)
		{
			runObjectTimer = false;
			objectTimer = 0;
		}
	}
	decrementLaneTimers();
	if (!trainCanSpawn)
	{
		decrementTrainTimer();
	}
	if (!proCanSpawn)
	{
		decrementProTimer();
	}	
}
function decrementProTimer()
{
		delayProTime -= changeInTime;
		if (delayProTime <= 0)
		{
			proCanSpawn = true;
			delayProTime = 8;
		}
}
function decrementTrainTimer()
{
	delayTrainTime -= changeInTime;
	if (delayTrainTime <= 0)
	{
		trainCanSpawn = true;
		delayTrainTime = 4;
	}
}
function decrementLaneTimers()
{
	for (var index = 0; index < 5; index++)
	{
		if (runLaneTimer[index])
		{
			laneTimer[index] += changeInTime;
			if (laneTimer[index] > delayTimeLane)
			{
				laneTimer[index] = 0;
				runLaneTimer[index] = false;
			} 
		}
	}
}

function spawnVehicle(lane : int)
{
	var vehicleX : float = 0;
	var vehicleY : float = 3;
	var vehicleZ : float = 91.5 + lane * 4;
	var moveIndex : float = 0;
	var destroyIndex : float = 0;
	var vehiclePosition : float = 0;
	var yRotation : float = 0;
	var faceDireciton = 1;
	if (lane <= 2)
	{
		GameObject.Find("Listener2").GetComponent("AudioListener").enabled = true;
		GameObject.Find("Listener").GetComponent("AudioListener").enabled = false;
		vehicleX = GameObject.Find("LeftWall").transform.position.x - 5;
		moveIndex = 10;
		destroyIndex = 130;
		vehiclePosition = 1;
	}
	else if (lane > 2)
	{
		GameObject.Find("Listener2").GetComponent("AudioListener").enabled = false;
		GameObject.Find("Listener").GetComponent("AudioListener").enabled = true;
		vehicleX = GameObject.Find("RightWall").transform.position.x + 5;		
		moveIndex = 10;
		destroyIndex = 70;
		vehiclePosition = 2;
		yRotation = 180;
	}
	spawnPoint = Vector3(vehicleX, vehicleY, vehicleZ);
	var vehicle : GameObject;
	var  horseRotation : Quaternion = new Quaternion(90, 90, 0, 0);
	switch(item)
	{
		case 1:
			if (lane == 3)
			{
				spawnPoint.z += 0.3;
			}
		vehicle = Instantiate(mJeep, spawnPoint ,Quaternion.identity);
		vehicle.GetComponent(MoveVehicle).moveIndex = moveIndex;
		vehicle.GetComponent(MoveVehicle).destroyIndex = destroyIndex;
		vehicle.GetComponent(MoveVehicle).highwayPosition = vehiclePosition;
		vehicle.transform.Rotate(0,yRotation, 0, Space.Self);
		break;
		
		case 2:
		vehicle = Instantiate(mObject2, spawnPoint , Quaternion.identity);
		vehicle.GetComponent(MoveRockingHorse).moveIndex = moveIndex;
		vehicle.GetComponent(MoveRockingHorse).moveIndex = moveIndex;
		vehicle.GetComponent(MoveRockingHorse).destroyIndex = destroyIndex;
		vehicle.GetComponent(MoveRockingHorse).highwayPosition = vehiclePosition;
		if (lane <= 2)
		{
			vehicle.transform.Rotate(270, 90, 0, Space.Self);

		}
		else if (lane > 2)
		{
			vehicle.transform.Rotate(270, -90, 0, Space.Self);
		}
		break;
		
		case 3:
		vehicle = Instantiate(mObject3, spawnPoint ,Quaternion.identity);
		vehicle.GetComponent(MoveTank).moveIndex = moveIndex;
		vehicle.GetComponent(MoveTank).destroyIndex = destroyIndex;
		vehicle.GetComponent(MoveTank).highwayPosition = vehiclePosition;
		if (lane <= 2)
		{
			vehicle.transform.Rotate(0, 90, 0, Space.Self);

		}
		else if (lane > 2)
		{
			vehicle.transform.Rotate(0, -90, 0, Space.Self);
		}
		break;
		
		case 4:
		if (trainCanSpawn)
			{
			if (lane <=2)
			{
				spawnPoint.x -= 15;
				destroyIndex += 50;
			}
			else if (lane > 2)
			{
				spawnPoint.x+= 15;
				destroyIndex -=50;
			}
			vehicle = Instantiate(mObject4, spawnPoint ,Quaternion.identity);
			
			vehicle.GetComponent(MoveTrain).moveIndex = moveIndex;
			vehicle.GetComponent(MoveTrain).destroyIndex = destroyIndex;
			vehicle.GetComponent(MoveTrain).highwayPosition = vehiclePosition;
			vehicle.transform.Rotate(0,yRotation, 0, Space.Self);
			trainCanSpawn = false;
		}
		break;
		
		case 5:
		vehicle = Instantiate(mObject5, spawnPoint ,Quaternion.identity);
		vehicle.GetComponent(MoveBabyCarriage).moveIndex = moveIndex;
		vehicle.GetComponent(MoveBabyCarriage).destroyIndex = destroyIndex;
		vehicle.GetComponent(MoveBabyCarriage).highwayPosition = vehiclePosition;
		if (lane <= 2)
		{
			vehicle.transform.Rotate(0, -90, 0, Space.Self);

		}
		else if (lane > 2)
		{
			vehicle.transform.Rotate(0, 90, 0, Space.Self);
		}
		break;
		
		case 6:
		spawnPoint = p;
		spawnPoint.y = 30;
		vehicle = Instantiate(mObject6, spawnPoint ,Quaternion.identity);
		break;
		
		case 7:
		if (proCanSpawn)
		{
			var x : int = 0;
			if (lane <=2)
			{
				GameObject.Find("Listener2").GetComponent("AudioSource").Play();
			}
			else if (lane >2)
			{
				GameObject.Find("Listener").GetComponent("AudioSource").Play();
			}
			while( x < 3)
			{
				spawnJeep(lane, spawnPoint);
				if (lane <=2)
				{
					spawnPoint.x -=10;
				}
				else if (lane > 2)
				{
					spawnPoint.x += 10;
				}
				spawnRockingHorse(lane, spawnPoint);
				if (lane <=2)
				{
					spawnPoint.x -= 6;
				}
				else if (lane > 2)
				{
					spawnPoint.x += 6;
				}
				spawnJeep(lane, spawnPoint);
				if (lane <=2)
				{
					spawnPoint.x -=10;
				}
				else if (lane > 2)
				{
					spawnPoint.x +=10;
				}
				x++;
			}
			proCanSpawn = false;
		}
		break;
		case 8:
		if (lane <=2)
		{
			spawnPoint.x += 1;
		}
		else if (lane > 2)
		{
			spawnPoint.x -= 1;
		}
		vehicle = Instantiate(mObject8, spawnPoint ,Quaternion.identity);
		vehicle.GetComponent(MovePolice).moveIndex = moveIndex;
		vehicle.GetComponent(MovePolice).destroyIndex = destroyIndex;
		vehicle.GetComponent(MovePolice).highwayPosition = vehiclePosition;
		if (lane <= 2)
		{
			vehicle.transform.Rotate(0, 90, 0, Space.Self);

		}
		else if (lane > 2)
		{
			vehicle.transform.Rotate(0, -90, 0, Space.Self);
		}
		break;
	}
	if (item != 7)
	{
		vehicle.name = "Vehicle";
		Physics.IgnoreCollision(vehicle.collider, GameObject.Find("RightWall").collider, true);
		Physics.IgnoreCollision(vehicle.collider, GameObject.Find("LeftWall").collider, true);
		Physics.IgnoreCollision(vehicle.collider, GameObject.Find("BottomWall").collider, true);
		Physics.IgnoreCollision(vehicle.collider, GameObject.Find("TopWall").collider, true);
		var index = 0;
		if (item != 8)
		{
			for (index = 0; index < GetComponent("spawnHelperItems").blockArray.length; index++)
			{
				Physics.IgnoreCollision(vehicle.collider, GetComponent("spawnHelperItems").blockArray[index].collider, true);
			}
		}
	}
	runObjectTimer = true;
	runLaneTimer[lane] = true;
	vehicles.Push(vehicle);
}

function spawnJeep(lane : int, spawnPoint : Vector3)
{
			if (lane == 3)
			{
				spawnPoint.z += 0.4;
			}
	var moveIndex : float = 0;
	var destroyIndex : float = 0;
	var vehiclePosition : float = 0;
	var yRotation : float = 0;
	var faceDireciton = 1;
	if (lane <= 2)
	{
		moveIndex = 10;
		destroyIndex = 130;
		vehiclePosition = 1;
	}
	else if (lane > 2)
	{
		moveIndex = 10;
		destroyIndex = 70;
		vehiclePosition = 2;
		yRotation = 180;
	}
	var vehicle = Instantiate(mJeep, spawnPoint ,Quaternion.identity);
	vehicle.GetComponent(MoveVehicle).moveIndex = moveIndex;
	vehicle.GetComponent(MoveVehicle).destroyIndex = destroyIndex;
	vehicle.GetComponent(MoveVehicle).highwayPosition = vehiclePosition;
	vehicle.transform.Rotate(0,yRotation, 0, Space.Self);
	vehicle.name = "Vehicle";
	vehicle.GetComponent("AudioSource").enabled = false;
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("RightWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("LeftWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("BottomWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("TopWall").collider, true);
	vehicles.Push(vehicle);
}

function spawnRockingHorse(lane : int, spawnPoint : Vector3)
{
	spawnPoint.y = 2;
	var moveIndex : float = 0;
	var destroyIndex : float = 0;
	var vehiclePosition : float = 0;
	var yRotation : float = 0;
	var faceDireciton = 1;
	Debug.Log(lane);
	if (lane <= 2)
	{
		moveIndex = 10;
		destroyIndex = 130;
		vehiclePosition = 1;
	}
	else if (lane > 2)
	{
		moveIndex = 10;
		destroyIndex = 70;
		vehiclePosition = 2;
		yRotation = 180;
	}
	
	var vehicle = Instantiate(mObject2, spawnPoint , Quaternion.identity);
	vehicle.GetComponent(MoveRockingHorse).moveIndex = moveIndex;
	vehicle.GetComponent(MoveRockingHorse).destroyIndex = destroyIndex;
	vehicle.GetComponent(MoveRockingHorse).highwayPosition = vehiclePosition;
		vehicle.GetComponent("AudioSource").enabled = false;

	
	if (lane <= 2)
	{
		vehicle.transform.Rotate(270, 90, 0, Space.Self);

	}
	else if (lane > 2)
	{
		vehicle.transform.Rotate(270, -90, 0, Space.Self);
	}
	vehicle.name = "Vehicle";
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("RightWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("LeftWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("BottomWall").collider, true);
	Physics.IgnoreCollision(vehicle.collider, GameObject.Find("TopWall").collider, true);
	vehicles.Push(vehicle);
}

