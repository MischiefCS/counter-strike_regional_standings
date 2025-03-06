### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, sideffect, sk0R, xenization<br />
Global Rank: [73](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  401.8<br />
<br />
Final Rank Value (401.8) = Starting Rank Value (400.3) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.3


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
|            7 |       21 | 2025-02-26 | ATOX Esports            | L   | 0.142      | -            | -                | -                | -         |    -1.44 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            6 |       32 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.135      | 0.143        | 0.000 (0.000)    | 0.183 (0.004)    | 0 (0.000) |     2.86 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            5 |       50 | 2025-02-24 | The QUBE Esports        | W   | 0.128      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.01 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            4 |       69 | 2025-02-24 | The Huns Esports        | L   | 0.122      | -            | -                | -                | -         |    -1.92 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            3 |      380 | 2025-02-09 | Chinggis Warriors       | L   | 0.029      | -            | -                | -                | -         |    -0.45 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            2 |      411 | 2025-02-08 | Believe.                | W   | 0.022      | 0.143        | 0.000 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.34 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            1 |      507 | 2025-02-06 | Chinggis Warriors       | W   | 0.009      | 0.143        | 0.000 (0.000)    | 0.702 (0.001)    | 0 (0.000) |     0.14 | fury5k, MagnumZ, sideffect, sk0R, xenization |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
