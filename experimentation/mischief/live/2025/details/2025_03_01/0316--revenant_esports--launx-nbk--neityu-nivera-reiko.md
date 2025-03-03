### Roster Details<br />
Team Name: Revenant Esports<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [316](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [178]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  500.3<br />
<br />
Final Rank Value (500.3) = Starting Rank Value (499.8) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.8
- 400 + ( ( 0.051 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 499.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4294 | 2024-09-22 | Team Space         | L   | 0.131      | -            | -                | -                | -         |    -2.10 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            8 |     4316 | 2024-09-21 | GUN5 Esports       | L   | 0.125      | -            | -                | -                | -         |    -0.35 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            7 |     4514 | 2024-09-14 | SINNERS Esports    | W   | 0.079      | 0.384        | 0.027 (0.001)    | 0.480 (0.015)    | 0 (0.000) |     2.24 | lauNX, NBK-, Neityu, Nivera, reiko |
|            6 |     4646 | 2024-09-10 | Insilio            | L   | 0.052      | -            | -                | -                | -         |    -0.45 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            5 |     4667 | 2024-09-09 | EYEBALLERS         | L   | 0.046      | -            | -                | -                | -         |    -0.24 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            4 |     4727 | 2024-09-07 | AMKAL ESPORTS      | W   | 0.031      | 0.384        | 0.002 (0.000)    | 0.577 (0.007)    | 0 (0.000) |     0.78 | 0SAMAS, lauNX, NBK-, Nivera, reiko |
|            3 |     4741 | 2024-09-06 | JANO Esports       | W   | 0.026      | 0.435        | 0.022 (0.000)    | 0.404 (0.005)    | 0 (0.000) |     0.73 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            2 |     4797 | 2024-09-05 | Tricked Esport     | L   | 0.017      | -            | -                | -                | -         |    -0.08 | lauNX, NBK-, Nivera, reiko, tiziaN |
|            1 |     4859 | 2024-09-03 | CYBERSHOKE Esports | L   | 0.004      | -            | -                | -                | -         |    -0.02 | lauNX, NBK-, Nivera, reiko, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
