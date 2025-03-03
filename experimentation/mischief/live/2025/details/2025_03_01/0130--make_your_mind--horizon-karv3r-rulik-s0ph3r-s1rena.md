### Roster Details<br />
Team Name: Make Your Mind<br />
Roster: HorizoN, karv3r, Rulik, S0ph3R, s1rena<br />
Global Rank: [130](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  751.6<br />
<br />
Final Rank Value (751.6) = Starting Rank Value (697.2) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 697.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1499 | 2024-12-13 | Undone               | W   | 0.682      | 0.143        | 0.002 (0.000)    | 0.308 (0.030)    | 0 (0.000) |    11.27 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            9 |     1502 | 2024-12-13 | Final Form           | W   | 0.682      | 0.143        | 0.001 (0.000)    | 0.058 (0.006)    | 0 (0.000) |     4.92 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            8 |     1510 | 2024-12-13 | Axolotls             | W   | 0.682      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.86 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            7 |     1660 | 2024-12-08 | Alter Iron Club      | W   | 0.649      | 0.372        | 0.008 (0.002)    | 0.308 (0.074)    | 0 (0.000) |     9.94 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            6 |     1901 | 2024-12-03 | Chicken Coop Esports | W   | 0.616      | 0.372        | 0.006 (0.001)    | 0.090 (0.021)    | 0 (0.000) |     8.12 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            5 |     1960 | 2024-12-02 | Undone               | W   | 0.609      | 0.372        | 0.002 (0.001)    | 0.308 (0.070)    | 0 (0.000) |    10.90 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            4 |     2314 | 2024-11-24 | MCS Gaming           | W   | 0.556      | 0.233        | 0.003 (0.000)    | 0.310 (0.040)    | 0 (0.000) |     7.33 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            3 |     2316 | 2024-11-24 | Milky Gooners        | W   | 0.555      | 0.233        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.33 | HorizoN, karv3r, Rulik, s1rena, stanf1x |
|            2 |     2422 | 2024-11-22 | Blahaj               | L   | 0.542      | -            | -                | -                | -         |   -12.38 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |
|            1 |     2428 | 2024-11-22 | Immigrants Peek      | W   | 0.542      | 0.143        | 0.001 (0.000)    | 0.369 (0.029)    | 0 (0.000) |     7.13 | HorizoN, karv3r, Rulik, S0ph3R, s1rena  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,682.14)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.649 | $7,000.00      | $4,543.19       |
| 2024-11-24 |      0.556 | $250.00        | $138.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
