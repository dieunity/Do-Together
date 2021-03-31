# SoloProject

# PayMeToAdult Company Requirements

Note: These are not for the MVP, but more for future practices of making ERD and tables that can scale well to the intended user base

- Our website will have multiple users. 
- Each user will their own 50 given free AdultTokens in their AdultWallet to start.
- Each user can create a to-do list for themselves. They are only allowed up to 10 on their list.
- Each user can change color code of their to-do tasks, to help them group
- Each task will have a Tip Jar Button (when clicked, visiting user will send an AdultToken to user's AdultWallet)
- Each task will also have a Reward Jar Button (when clicked, visiting user will send an AdultToken into that particular task's RewardJar)
- When user checks off completion for the task, the corresponding RewardJar's balance will transfer to the user's AdultWallet. 


Below is the basic Entities Relational Diagram:
![Basic ERD](/docs/assets/images/PayMeToAdult_basic.png)