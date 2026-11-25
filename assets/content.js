// Edit links and lesson information here. Empty URLs are not shown as active links.
window.COURSE = {
  title: 'Robotics from First Principles',
  instructor: 'Hadush Hailu',
  youtubeChannel: '',
  googleGroup: '',
  chapters: [
    {id:'linear-algebra',number:1,part:'Mathematical foundations',title:'Linear algebra from first principles',description:'Build geometric intuition for coordinates, vectors, projections, and matrices—with Kino as your guide.',available:true},
    {id:'calculus',number:2,part:'Mathematical foundations',title:'Calculus and optimization fundamentals'},
    {id:'degrees-of-freedom',number:3,part:'Foundations of robot motion',title:'Introduction to robotics and degrees of freedom'},
    {id:'configuration-space',number:4,part:'Foundations of robot motion',title:'Configuration space'},
    {id:'rigid-body-motion',number:5,part:'Foundations of robot motion',title:'Rigid-body motion and transformations'},
    {id:'forward-kinematics',number:6,part:'Robot kinematics and dynamics',title:'Forward kinematics of open-chain robots'},
    {id:'jacobians',number:7,part:'Robot kinematics and dynamics',title:'Velocity kinematics and Jacobians'},
    {id:'inverse-kinematics',number:8,part:'Robot kinematics and dynamics',title:'Inverse kinematics'},
    {id:'statics',number:9,part:'Robot kinematics and dynamics',title:'Statics, forces, and wrenches'},
    {id:'dynamics',number:10,part:'Robot kinematics and dynamics',title:'Robot dynamics and equations of motion'},
    {id:'trajectories',number:11,part:'Motion planning, optimization, and control',title:'Trajectory generation and time parameterization'},
    {id:'motion-planning',number:12,part:'Motion planning, optimization, and control',title:'Motion planning and collision avoidance'},
    {id:'control',number:13,part:'Motion planning, optimization, and control',title:'Fundamentals of robot control'},
    {id:'computed-torque',number:14,part:'Motion planning, optimization, and control',title:'Computed-torque and model-based control'},
    {id:'optimal-control',number:15,part:'Motion planning, optimization, and control',title:'Constrained optimization and optimal control'},
    {id:'mpc',number:16,part:'Motion planning, optimization, and control',title:'Model predictive control'},
    {id:'advanced-topics',number:17,part:'Motion planning, optimization, and control',title:'Advanced topics in robot motion and control'}
  ],
  lessons: [
    {id:'spaces-frames-coordinates',chapter:'linear-algebra',section:'1.1',title:'Spaces, frames, and coordinates',description:'Where is Kino’s gripper? Start with an origin, a direction, and a unit of measurement.',status:'Notes available',youtube:'',date:'',duration:'',notes:'materials/Robotics_first_principles_v1.1.pdf',exercise:'',lab:'linear-algebra',mode:'position',topics:['Why a position needs a reference point','Axes, units, and coordinates','Changing the description without moving the object'],prompt:'Choose a position for Kino’s end effector. Identify its horizontal and vertical components.'},
    {id:'unit-vectors-basis-span',chapter:'linear-algebra',section:'1.2',title:'Unit vectors, basis, and span',description:'Build a position from small steps. Discover how basis vectors describe a line and a plane.',status:'Notes available',youtube:'',date:'',duration:'',notes:'materials/Robotics_first_principles_v1.1.pdf',exercise:'',lab:'linear-algebra',mode:'projection',topics:['Direction and unit length','Scaling a vector to span a line','Representing a point with two basis vectors'],prompt:'In Projection, choose a new basis. Change its vectors and compare the coordinates of the same end effector.'},
    {id:'projections-dot-products',chapter:'linear-algebra',section:'1.3',title:'Projections and dot products',description:'How much of one vector points along another? Explore perpendicular projections with Kino and two balls.',status:'Exercise available',youtube:'',date:'',duration:'',notes:'materials/Robotics_first_principles_v1.1.pdf',exercise:'materials/kino-projection-exercises.pdf',lab:'linear-algebra',mode:'projection',topics:['Vector magnitude and normalization','Scalar and vector projections','The general projection matrix'],prompt:'Set P = (5, 3). Project it onto the directions (4, −2) and (2, 4), then work through the worksheet.'},
    {id:'matrices-transformations',chapter:'linear-algebra',section:'1.5',title:'Matrices and linear transformations',description:'See a matrix act on space by scaling the coordinate directions and the end-effector vector.',status:'Lab available',youtube:'',date:'',duration:'',notes:'',exercise:'',lab:'linear-algebra',mode:'matrix',topics:['A matrix as a transformation','Scaling the two coordinate directions','Comparing a vector with its transformed result'],prompt:'Open Matrix. Scale one direction at a time, then both. Compare P with AP.'}
  ],
  labs: [
    {id:'linear-algebra',title:'Linear algebra with Kino',tag:'Chapter 1',description:'Position vectors, projections, new bases, and matrix scaling. One robot, four ways to see the mathematics.',available:true,art:'vectors'},
    {id:'coordinate-frames',title:'Coordinate frames',tag:'Planned · Chapter 5',description:'Describe the same point from translated and rotated reference frames.',available:false,art:'frames'},
    {id:'forward-kinematics',title:'Forward kinematics',tag:'Planned · Chapter 6',description:'Connect joint angles to the position and orientation of Kino’s gripper.',available:false,art:'arm'},
    {id:'motion-planning',title:'Motion planning',tag:'Planned · Chapter 12',description:'Explore paths through a world with obstacles.',available:false,art:'path'}
  ]
};
