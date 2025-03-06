### Roster Details<br />
Team Name: TEAM NEXT LEVEL<br />
Roster: cairne, onic, St0m4k, yukitoro, zogeN<br />
Global Rank: [98](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  713.5<br />
<br />
Final Rank Value (713.5) = Starting Rank Value (714.5) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 714.5
- 400 + ( ( 0.144 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 714.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      767 | 2024-12-22 | KONO.ECF             | L   | 0.304      | -            | -                | -                | -         |    -4.65 | cairne, onic, St0m4k, yukitoro, zogeN |
|            5 |      825 | 2024-12-17 | FAVBET Team          | L   | 0.271      | -            | -                | -                | -         |    -3.82 | cairne, onic, St0m4k, yukitoro, zogeN |
|            4 |      834 | 2024-12-16 | Dragon Esports Club  | W   | 0.264      | 0.143        | 0.005 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     3.44 | cairne, onic, St0m4k, yukitoro, zogeN |
|            3 |      948 | 2024-12-09 | TEAM NEXT LEVEL      | W   | 0.218      | 0.143        | 0.003 (0.000)    | 0.139 (0.004)    | 0 (0.000) |     2.98 | cairne, onic, St0m4k, yukitoro, zogeN |
|            2 |     1220 | 2024-11-27 | Iberian Soul         | L   | 0.137      | -            | -                | -                | -         |    -1.92 | cairne, onic, St0m4k, yukitoro, zogeN |
|            1 |     1235 | 2024-11-26 | Natus Vincere Junior | W   | 0.131      | 0.333        | 0.057 (0.002)    | 0.572 (0.025)    | 0 (0.000) |     2.96 | cairne, onic, St0m4k, yukitoro, zogeN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,856.49)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.304 | $478.80        | $145.77         |
| 2024-12-17 |      0.271 | $4,790.69      | $1,299.47       |
| 2024-11-27 |      0.137 | $3,000.00      | $411.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
