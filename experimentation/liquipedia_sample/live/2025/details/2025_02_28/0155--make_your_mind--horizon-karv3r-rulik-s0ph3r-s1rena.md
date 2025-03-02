### Roster Details<br />
Team Name: Make Your Mind<br />
Roster: HorizoN, karv3r, Rulik, S0ph3R, s1rena<br />
Global Rank: [155](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [110]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  787.5<br />
<br />
Final Rank Value (787.5) = Starting Rank Value (724.5) + Head To Head Adjustments (63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.5
- 400 + ( ( 0.157 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 724.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1611 | 2024-12-13 | Undone                 | W   | 0.689      | 0.143        | 0.003 (0.000)    | 0.334 (0.033)    | 0 (0.000) |    12.03 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|           11 |     1614 | 2024-12-13 | Final Form             | W   | 0.688      | 0.143        | 0.001 (0.000)    | 0.083 (0.008)    | 0 (0.000) |     6.71 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|           10 |     1622 | 2024-12-13 | Axolotls               | W   | 0.688      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.45 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            9 |     1830 | 2024-12-08 | SUPER EVIL GANG        | W   | 0.655      | 0.372        | 0.011 (0.003)    | 0.432 (0.105)    | 0 (0.000) |    11.08 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            8 |     2072 | 2024-12-03 | Chicken Coop Esports   | W   | 0.622      | 0.372        | 0.008 (0.002)    | 0.203 (0.047)    | 0 (0.000) |     8.80 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            7 |     2142 | 2024-12-02 | Undone                 | W   | 0.615      | 0.372        | 0.003 (0.001)    | 0.334 (0.076)    | 0 (0.000) |    11.73 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            6 |     2208 | 2024-12-01 | HoleSmokers            | W   | 0.609      | 0.372        | 0.000 (0.000)    | 0.030 (0.007)    | 0 (0.000) |     2.72 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            5 |     2370 | 2024-11-29 | LOSTHILLS              | W   | 0.595      | 0.372        | -                | 0.029 (0.006)    | 0 (0.000) |     2.65 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            4 |     2571 | 2024-11-24 | MCS Gaming             | W   | 0.562      | 0.233        | 0.003 (0.000)    | 0.169 (0.022)    | 0 (0.000) |     6.97 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            3 |     2573 | 2024-11-24 | Milky Gooners          | W   | 0.561      | 0.233        | 0.000 (0.000)    | -                | 0 (0.000) |     4.04 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            2 |     2735 | 2024-11-22 | WICKED (American team) | L   | 0.548      | -            | -                | -                | -         |   -13.09 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            1 |     2740 | 2024-11-22 | Immigrants Peek        | W   | 0.548      | 0.143        | 0.002 (0.000)    | 0.241 (0.019)    | -         |     6.92 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,727.29)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.655 | $7,000.00      | $4,586.78       |
| 2024-11-24 |      0.562 | $250.00        | $140.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
