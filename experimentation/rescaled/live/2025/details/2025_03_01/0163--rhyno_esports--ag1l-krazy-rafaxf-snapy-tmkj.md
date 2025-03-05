### Roster Details<br />
Team Name: Rhyno Esports<br />
Roster: Ag1l, krazy, rafaxF, snapy, TMKj<br />
Global Rank: [163](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [112]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  686.3<br />
<br />
Final Rank Value (686.3) = Starting Rank Value (674.3) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.3
- 400 + ( ( 0.144 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 674.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2153 | 2024-10-06 | Rhyno Esports      | L   | 0.225      | -            | -                | -                | -         |    -1.84 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|           12 |     2184 | 2024-10-05 | Iberian Soul       | W   | 0.218      | 0.548        | 0.015 (0.002)    | 0.644 (0.077)    | 1 (0.218) |     6.09 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|           11 |     2244 | 2024-10-03 | 3DMAX              | L   | 0.206      | -            | -                | -                | -         |    -0.03 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|           10 |     2341 | 2024-10-01 | CYBERSHOKE Esports | W   | 0.192      | 0.825        | 0.010 (0.002)    | 1.000 (0.158)    | 0 (0.000) |     5.22 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|            9 |     2398 | 2024-09-29 | FAVBET Team        | W   | 0.178      | 0.836        | 0.029 (0.004)    | 0.608 (0.090)    | 0 (0.000) |     4.55 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|            8 |     2455 | 2024-09-27 | TALON              | W   | 0.165      | 0.792        | 0.000 (0.000)    | 0.127 (0.017)    | 0 (0.000) |     1.44 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|            7 |     2537 | 2024-09-25 | ALTERNATE aTTaX    | L   | 0.153      | -            | -                | -                | -         |    -1.10 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|            6 |     2618 | 2024-09-24 | Monte              | L   | 0.145      | -            | -                | -                | -         |    -0.94 | Ag1l, krazy, rafaxF, snapy, TMKj     |
|            5 |     3035 | 2024-09-09 | QUAZAR             | L   | 0.045      | -            | -                | -                | -         |    -0.85 | Ag1l, krazy, NOPEEj, P3R3IIRA, snapy |
|            4 |     3047 | 2024-09-08 | Insilio            | L   | 0.039      | -            | -                | -                | -         |    -0.61 | Ag1l, krazy, NOPEEj, P3R3IIRA, snapy |
|            3 |     3118 | 2024-09-06 | Team Space         | W   | 0.024      | 0.435        | 0.000 (0.000)    | 0.018 (0.000)    | 0 (0.000) |     0.19 | Ag1l, krazy, NOPEEj, P3R3IIRA, snapy |
|            2 |     3180 | 2024-09-04 | Tricked Esport     | L   | 0.011      | -            | -                | -                | -         |    -0.07 | Ag1l, krazy, NOPEEj, P3R3IIRA, snapy |
|            1 |     3188 | 2024-09-04 | JANO Esports       | L   | 0.010      | -            | -                | -                | -         |    -0.09 | Ag1l, krazy, NOPEEj, P3R3IIRA, snapy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($741.27)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      0.225 | $3,294.52      | $741.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
