### Roster Details<br />
Team Name: Fisher College<br />
Roster: AlekS, corn, CrePoW, ReFuZR, tatm<br />
Global Rank: [192](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  798.4<br />
<br />
Final Rank Value (798.4) = Starting Rank Value (800.3) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.3
- 400 + ( ( 0.201 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 800.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      624 | 2025-02-07 | Getting Info            | L   | 1.000      | -            | -                | -                | -         |    -5.15 | AlekS, corn, CrePoW, ReFuZR, tatm |
|           13 |     1686 | 2024-12-12 | Homyno                  | L   | 0.682      | -            | -                | -                | -         |   -12.87 | AlekS, corn, CrePoW, ReFuZR, tatm |
|           12 |     1717 | 2024-12-11 | Small rejuice           | W   | 0.675      | 1.000        | 0.001 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     3.47 | AlekS, corn, CrePoW, ReFuZR, tatm |
|           11 |     1767 | 2024-12-10 | Habibi                  | W   | 0.669      | 1.000        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.45 | AlekS, corn, CrePoW, ReFuZR, tatm |
|           10 |     1910 | 2024-12-07 | Undone                  | L   | 0.648      | -            | -                | -                | -         |    -9.10 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            9 |     1927 | 2024-12-07 | Take Flyte Kings        | W   | 0.646      | 1.000        | 0.000 (0.000)    | 0.003 (0.002)    | 1 (0.646) |     1.78 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            8 |     1971 | 2024-12-06 | Nouns Esports           | L   | 0.642      | -            | -                | -                | -         |    -3.55 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            7 |     4541 | 2024-10-20 | Timbermen               | W   | 0.327      | 1.000        | 0.003 (0.001)    | 0.032 (0.011)    | 1 (0.327) |     3.57 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            6 |     4543 | 2024-10-20 | Slugy's Shekel Squad    | W   | 0.327      | 1.000        | 0.001 (0.000)    | 0.016 (0.005)    | 1 (0.327) |     1.90 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            5 |     4609 | 2024-10-19 | Penance (American Team) | W   | 0.322      | 1.000        | 0.000 (0.000)    | 0.004 (0.001)    | 1 (0.322) |     0.90 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            4 |     4903 | 2024-10-13 | FLUFFY AIMERS           | W   | 0.281      | 1.000        | 0.006 (0.002)    | 0.237 (0.067)    | 0 (0.000) |     5.30 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            3 |     4953 | 2024-10-12 | InControl               | W   | 0.274      | 1.000        | 0.002 (0.000)    | 0.094 (0.026)    | 0 (0.000) |     2.70 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            2 |     4958 | 2024-10-12 | Final Form              | W   | 0.273      | 1.000        | 0.001 (0.000)    | 0.083 (0.023)    | 0 (0.000) |     2.41 | AlekS, corn, CrePoW, ReFuZR, tatm |
|            1 |     4965 | 2024-10-12 | Supernova Comets        | W   | 0.273      | 1.000        | 0.013 (0.004)    | 0.269 (0.073)    | 0 (0.000) |     3.35 | AlekS, corn, CrePoW, ReFuZR, tatm |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,713.11)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.702 | $1,000.00      | $701.92         |
| 2024-10-20 |      0.327 | $5,500.00      | $1,800.74       |
| 2024-10-13 |      0.281 | $750.00        | $210.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
