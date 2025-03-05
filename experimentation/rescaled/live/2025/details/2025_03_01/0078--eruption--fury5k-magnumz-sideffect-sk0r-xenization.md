### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, sideffect, sk0R, xenization<br />
Global Rank: [78](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  898.9<br />
<br />
Final Rank Value (898.9) = Starting Rank Value (890.5) + Head To Head Adjustments (8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.270[<sup>2</sup>](#table1)

The average of these factors is 0.258<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.5
- 400 + ( ( 0.258 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 890.5


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
|           11 |       21 | 2025-02-26 | ATOX Esports            | L   | 1.000      | -            | -                | -                | -         |    -7.61 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|           10 |       32 | 2025-02-25 | Nomads (Mongolian team) | W   | 1.000      | 0.633        | 0.000 (0.000)    | 0.060 (0.038)    | 0 (0.000) |     3.37 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            9 |       50 | 2025-02-24 | The QUBE Esports        | W   | 1.000      | 0.631        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.75 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            8 |       69 | 2025-02-24 | The Huns Esports        | L   | 1.000      | -            | -                | -                | -         |   -12.92 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            7 |      380 | 2025-02-09 | Chinggis Warriors       | L   | 1.000      | -            | -                | -                | -         |   -19.40 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            6 |      411 | 2025-02-08 | Believe.                | W   | 1.000      | 0.539        | 0.000 (0.000)    | 0.060 (0.032)    | 0 (0.000) |     2.84 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            5 |      507 | 2025-02-06 | Chinggis Warriors       | W   | 1.000      | 0.536        | 0.016 (0.009)    | 0.555 (0.298)    | 0 (0.000) |    11.29 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            4 |      739 | 2024-12-29 | ATOX Esports            | L   | 0.784      | -            | -                | -                | -         |    -6.81 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            3 |      744 | 2024-12-28 | Rare Atom               | W   | 0.778      | 0.683        | 0.028 (0.015)    | 0.405 (0.215)    | 1 (0.778) |    11.45 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            2 |      753 | 2024-12-26 | ATOX Esports            | W   | 0.770      | 0.683        | 0.058 (0.031)    | 0.659 (0.347)    | 1 (0.770) |    17.81 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            1 |      755 | 2024-12-26 | IHC Esports             | W   | 0.769      | 0.683        | 0.002 (0.001)    | 0.197 (0.104)    | 1 (0.769) |     6.64 | fury5k, MagnumZ, sideffect, sk0R, xenization |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,704.17)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.784 | $6,000.00      | $4,704.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
