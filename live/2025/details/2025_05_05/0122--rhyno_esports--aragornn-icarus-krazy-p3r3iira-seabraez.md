### Roster Details<br />
Team Name: Rhyno Esports<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [122](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  656.4<br />
<br />
Final Rank Value (656.4) = Starting Rank Value (702.5) + Head To Head Adjustments (-46.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.053[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.5
- 400 + ( ( 0.139 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 702.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       18 | 2025-02-27 | BC.Game Esports             | L   | 0.749      | -            | -                | -                | -         |    -3.08 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           13 |       28 | 2025-02-26 | Alliance                    | L   | 0.743      | -            | -                | -                | -         |    -9.26 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |      162 | 2025-02-20 | Betclic Apogee Esports      | L   | 0.703      | -            | -                | -                | -         |    -7.20 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |      169 | 2025-02-19 | PARIVISION                  | L   | 0.697      | -            | -                | -                | -         |   -10.84 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |      196 | 2025-02-17 | Mercenaires                 | L   | 0.684      | -            | -                | -                | -         |   -16.04 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |      712 | 2025-01-09 | Insilio                     | L   | 0.424      | -            | -                | -                | -         |    -9.21 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |      720 | 2025-01-06 | FLuffy Gangsters            | W   | 0.405      | 0.417        | 0.002 (0.000)    | 0.209 (0.035)    | 0 (0.000) |     5.52 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |      730 | 2025-01-04 | CS2NEWS                     | W   | 0.389      | 0.417        | 0.000 (0.000)    | 0.039 (0.006)    | 0 (0.000) |     3.34 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |      732 | 2025-01-03 | KONO.ECF                    | L   | 0.384      | -            | -                | -                | -         |    -8.49 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |      745 | 2024-12-28 | BRUTE                       | W   | 0.343      | 0.417        | 0.002 (0.000)    | 0.055 (0.008)    | 0 (0.000) |     4.76 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     1308 | 2024-11-22 | GTZ.ESPORTS                 | W   | 0.104      | 0.143        | 0.034 (0.001)    | 0.278 (0.004)    | 1 (0.104) |     2.42 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            3 |     1399 | 2024-11-17 | Iberian Soul                | W   | 0.071      | 0.143        | 0.007 (0.000)    | 0.589 (0.006)    | 1 (0.071) |     1.27 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            2 |     1434 | 2024-11-16 | The Agency Clan             | W   | 0.063      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.063) |     0.60 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            1 |     1596 | 2024-11-09 | NeverPlay (Portuguese team) | W   | 0.018      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.018) |     0.15 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($480.92)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-22 |      0.104 | $1,047.10      | $108.93         |
| 2024-11-17 |      0.071 | $5,272.32      | $371.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
