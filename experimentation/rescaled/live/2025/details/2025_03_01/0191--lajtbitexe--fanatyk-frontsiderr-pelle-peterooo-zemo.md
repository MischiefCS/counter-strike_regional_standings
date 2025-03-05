### Roster Details<br />
Team Name: Lajtbitexe<br />
Roster: fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO<br />
Global Rank: [191](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  639.3<br />
<br />
Final Rank Value (639.3) = Starting Rank Value (633.1) + Head To Head Adjustments (6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.1
- 400 + ( ( 0.122 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 633.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2700 | 2024-09-21 | 9Pandas               | L   | 0.125      | -            | -                | -                | -         |    -0.32 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |
|            4 |     2718 | 2024-09-20 | Johnny Speeds         | L   | 0.118      | -            | -                | -                | -         |    -0.63 | fanatyk, Frontsiderr, karmazynsz, Pelle, PeTeRoOo |
|            3 |     2748 | 2024-09-19 | BC.Game Esports       | W   | 0.112      | 0.520        | 0.077 (0.005)    | 0.912 (0.053)    | 0 (0.000) |     3.46 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |
|            2 |     2882 | 2024-09-14 | 9INE                  | W   | 0.078      | 0.446        | 0.011 (0.000)    | 0.150 (0.005)    | 0 (0.000) |     1.57 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |
|            1 |     2898 | 2024-09-14 | RUSH B (Russian team) | W   | 0.077      | 0.446        | 0.027 (0.001)    | 0.569 (0.020)    | 0 (0.000) |     2.11 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($289.44)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-24 |      0.145 | $2,000.00      | $289.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
