### Roster Details<br />
Team Name: Final Form<br />
Roster: Beast, CAJUN, CoolComs, TyRa, YNGHunter<br />
Global Rank: [569](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [130]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  411.6<br />
<br />
Final Rank Value (411.6) = Starting Rank Value (400.9) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.9
- 400 + ( ( 0.000 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 400.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2075 | 2024-12-03 | OutGoing eSports | L   | 0.622      | -            | -                | -                | -         |    -3.69 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            6 |     2145 | 2024-12-02 | Ascend           | W   | 0.615      | 1.000        | 0.000 (0.000)    | 0.030 (0.019)    | 0 (0.000) |    11.73 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            5 |     2214 | 2024-12-01 | InControl        | W   | 0.609      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.35 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            4 |     2372 | 2024-11-29 | MCS Gaming       | L   | 0.595      | -            | -                | -                | -         |    -3.27 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            3 |     2500 | 2024-11-26 | Getting Info     | L   | 0.575      | -            | -                | -                | -         |    -0.63 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            2 |     2744 | 2024-11-22 | Akimbo Esports   | L   | 0.548      | -            | -                | -                | -         |    -2.12 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |
|            1 |     2945 | 2024-11-19 | Party Astronauts | L   | 0.528      | -            | -                | -                | -         |    -0.66 | Beast, CAJUN, CoolComs, TyRa, YNGHunter |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
