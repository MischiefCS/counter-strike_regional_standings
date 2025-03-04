### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, sideffect, sk0R, xenization<br />
Global Rank: [74](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  878.7<br />
<br />
Final Rank Value (878.7) = Starting Rank Value (869.4) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.270[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.4
- 400 + ( ( 0.247 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 869.4


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
|           11 |       21 | 2025-02-26 | ATOX Esports            | L   | 1.000      | -            | -                | -                | -         |    -7.81 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|           10 |       32 | 2025-02-25 | Nomads (Mongolian team) | W   | 1.000      | 0.480        | 0.000 (0.000)    | 0.060 (0.029)    | 0 (0.000) |     3.65 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            9 |       50 | 2025-02-24 | The QUBE Esports        | W   | 1.000      | 0.480        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.95 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            8 |       69 | 2025-02-24 | The Huns Esports        | L   | 1.000      | -            | -                | -                | -         |   -13.03 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            7 |      380 | 2025-02-09 | Chinggis Warriors       | L   | 1.000      | -            | -                | -                | -         |   -19.02 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            6 |      411 | 2025-02-08 | Believe.                | W   | 1.000      | 0.358        | 0.000 (0.000)    | 0.060 (0.021)    | 0 (0.000) |     3.10 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            5 |      507 | 2025-02-06 | Chinggis Warriors       | W   | 1.000      | 0.358        | 0.016 (0.006)    | 0.555 (0.199)    | 0 (0.000) |    11.71 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            4 |      739 | 2024-12-29 | ATOX Esports            | L   | 0.784      | -            | -                | -                | -         |    -7.04 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            3 |      744 | 2024-12-28 | Rare Atom               | W   | 0.778      | 0.486        | 0.028 (0.010)    | 0.405 (0.153)    | 1 (0.778) |    11.35 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            2 |      753 | 2024-12-26 | ATOX Esports            | W   | 0.770      | 0.486        | 0.058 (0.022)    | 0.659 (0.247)    | 1 (0.770) |    17.56 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            1 |      755 | 2024-12-26 | IHC Esports             | W   | 0.769      | 0.486        | 0.002 (0.001)    | 0.197 (0.074)    | 1 (0.769) |     6.92 | fury5k, MagnumZ, sideffect, sk0R, xenization |

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
