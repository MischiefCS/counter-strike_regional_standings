### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, sideffect, sk0R, xenization<br />
Global Rank: [57](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  848.3<br />
<br />
Final Rank Value (848.3) = Starting Rank Value (858.8) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.236[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 858.8
- 400 + ( ( 0.222 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 858.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       21 | 2025-02-26 | ATOX Esports            | L   | 0.935      | -            | -                | -                | -         |    -9.13 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|           10 |       32 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.928      | 0.143        | 0.000 (0.000)    | 0.074 (0.010)    | 0 (0.000) |     3.74 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            9 |       50 | 2025-02-24 | The QUBE Esports        | W   | 0.921      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.08 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            8 |       69 | 2025-02-24 | The Huns Esports        | L   | 0.916      | -            | -                | -                | -         |   -14.30 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            7 |      380 | 2025-02-09 | Chinggis Warriors       | L   | 0.822      | -            | -                | -                | -         |   -18.63 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            6 |      411 | 2025-02-08 | Believe.                | W   | 0.815      | 0.143        | 0.000 (0.000)    | 0.065 (0.008)    | 0 (0.000) |     2.69 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            5 |      507 | 2025-02-06 | Chinggis Warriors       | W   | 0.802      | 0.143        | 0.010 (0.001)    | 0.522 (0.060)    | 0 (0.000) |     6.52 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            4 |      739 | 2024-12-29 | ATOX Esports            | L   | 0.536      | -            | -                | -                | -         |    -6.09 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            3 |      744 | 2024-12-28 | Rare Atom               | W   | 0.530      | 0.384        | 0.027 (0.005)    | 0.439 (0.089)    | 1 (0.530) |     7.47 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            2 |      753 | 2024-12-26 | ATOX Esports            | W   | 0.522      | 0.384        | 0.052 (0.010)    | 0.683 (0.137)    | 1 (0.522) |    10.63 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            1 |      755 | 2024-12-26 | IHC Esports             | W   | 0.521      | 0.384        | 0.002 (0.000)    | 0.171 (0.034)    | 1 (0.521) |     4.56 | fury5k, MagnumZ, sideffect, sk0R, xenization |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,214.17)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.536 | $6,000.00      | $3,214.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
