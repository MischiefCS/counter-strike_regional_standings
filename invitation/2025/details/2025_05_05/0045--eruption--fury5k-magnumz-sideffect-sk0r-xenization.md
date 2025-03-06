### Roster Details<br />
Team Name: Eruption<br />
Roster: fury5k, MagnumZ, sideffect, sk0R, xenization<br />
Global Rank: [45](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  848.5<br />
<br />
Final Rank Value (848.5) = Starting Rank Value (862.9) + Head To Head Adjustments (-14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.212[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.9
- 400 + ( ( 0.212 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 862.9


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
|           11 |       21 | 2025-02-26 | ATOX Esports            | L   | 0.748      | -            | -                | -                | -         |    -7.87 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|           10 |       32 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.742      | 0.143        | 0.000 (0.000)    | 0.081 (0.009)    | 0 (0.000) |     3.11 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            9 |       50 | 2025-02-24 | The QUBE Esports        | W   | 0.735      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.67 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            8 |       69 | 2025-02-24 | The Huns Esports        | L   | 0.729      | -            | -                | -                | -         |   -13.07 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            7 |      380 | 2025-02-09 | Chinggis Warriors       | L   | 0.635      | -            | -                | -                | -         |   -14.71 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            6 |      411 | 2025-02-08 | Believe.                | W   | 0.629      | 0.143        | 0.000 (0.000)    | 0.069 (0.006)    | 0 (0.000) |     1.33 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            5 |      507 | 2025-02-06 | Chinggis Warriors       | W   | 0.615      | 0.143        | 0.007 (0.001)    | 0.499 (0.044)    | 0 (0.000) |     4.97 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            4 |      739 | 2024-12-29 | ATOX Esports            | L   | 0.349      | -            | -                | -                | -         |    -4.07 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            3 |      744 | 2024-12-28 | Rare Atom               | W   | 0.343      | 0.384        | 0.030 (0.004)    | 0.441 (0.058)    | 1 (0.343) |     4.67 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            2 |      753 | 2024-12-26 | ATOX Esports            | W   | 0.335      | 0.384        | 0.055 (0.007)    | 0.667 (0.086)    | 1 (0.335) |     6.74 | fury5k, MagnumZ, sideffect, sk0R, xenization |
|            1 |      755 | 2024-12-26 | IHC Esports             | W   | 0.334      | 0.384        | 0.003 (0.000)    | 0.131 (0.017)    | 1 (0.334) |     2.84 | fury5k, MagnumZ, sideffect, sk0R, xenization |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,094.17)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.349 | $6,000.00      | $2,094.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
