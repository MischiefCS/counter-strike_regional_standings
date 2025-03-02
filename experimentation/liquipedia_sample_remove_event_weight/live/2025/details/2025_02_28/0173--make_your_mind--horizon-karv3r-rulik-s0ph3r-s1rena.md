### Roster Details<br />
Team Name: Make Your Mind<br />
Roster: HorizoN, karv3r, Rulik, S0ph3R, s1rena<br />
Global Rank: [173](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  830.7<br />
<br />
Final Rank Value (830.7) = Starting Rank Value (771.2) + Head To Head Adjustments (59.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.116[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.2
- 400 + ( ( 0.186 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 771.2


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
|           12 |     1611 | 2024-12-13 | Undone                 | W   | 0.689      | 1.000        | 0.003 (0.002)    | 0.334 (0.230)    | 0 (0.000) |    12.40 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|           11 |     1614 | 2024-12-13 | Final Form             | W   | 0.688      | 1.000        | 0.001 (0.001)    | 0.083 (0.057)    | 0 (0.000) |     5.82 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|           10 |     1622 | 2024-12-13 | Axolotls               | W   | 0.688      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.96 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            9 |     1830 | 2024-12-08 | SUPER EVIL GANG        | W   | 0.655      | 1.000        | 0.011 (0.007)    | 0.432 (0.283)    | 0 (0.000) |    11.40 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            8 |     2072 | 2024-12-03 | Chicken Coop Esports   | W   | 0.622      | 1.000        | 0.008 (0.005)    | 0.203 (0.126)    | 0 (0.000) |     8.05 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            7 |     2142 | 2024-12-02 | Undone                 | W   | 0.615      | 1.000        | 0.003 (0.002)    | 0.334 (0.205)    | 0 (0.000) |    12.05 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            6 |     2208 | 2024-12-01 | HoleSmokers            | W   | 0.609      | 1.000        | 0.000 (0.000)    | 0.030 (0.018)    | 0 (0.000) |     2.19 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            5 |     2370 | 2024-11-29 | LOSTHILLS              | W   | 0.595      | 1.000        | -                | 0.029 (0.017)    | 0 (0.000) |     2.13 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            4 |     2571 | 2024-11-24 | MCS Gaming             | W   | 0.562      | 1.000        | 0.003 (0.002)    | 0.169 (0.095)    | 0 (0.000) |     6.39 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            3 |     2573 | 2024-11-24 | Milky Gooners          | W   | 0.561      | 1.000        | 0.000 (0.000)    | -                | 0 (0.000) |     3.23 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            2 |     2735 | 2024-11-22 | WICKED (American team) | L   | 0.548      | -            | -                | -                | -         |   -13.38 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            1 |     2740 | 2024-11-22 | Immigrants Peek        | W   | 0.548      | 1.000        | 0.002 (0.001)    | 0.241 (0.132)    | -         |     7.28 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |

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
