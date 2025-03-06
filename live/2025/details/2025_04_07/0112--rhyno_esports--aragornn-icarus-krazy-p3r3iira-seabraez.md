### Roster Details<br />
Team Name: Rhyno Esports<br />
Roster: aragornN, Icarus, krazy, P3R3IIRA, seabraez<br />
Global Rank: [112](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  708.6<br />
<br />
Final Rank Value (708.6) = Starting Rank Value (769.2) + Head To Head Adjustments (-60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 769.2
- 400 + ( ( 0.179 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 769.2


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
|           14 |       18 | 2025-02-27 | BC.Game Esports             | L   | 0.936      | -            | -                | -                | -         |    -4.13 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           13 |       28 | 2025-02-26 | Alliance                    | L   | 0.929      | -            | -                | -                | -         |   -12.08 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           12 |      162 | 2025-02-20 | Betclic Apogee Esports      | L   | 0.889      | -            | -                | -                | -         |   -10.39 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           11 |      169 | 2025-02-19 | PARIVISION                  | L   | 0.884      | -            | -                | -                | -         |   -14.81 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |      196 | 2025-02-17 | Mercenaires                 | L   | 0.871      | -            | -                | -                | -         |   -21.99 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |      712 | 2025-01-09 | Insilio                     | L   | 0.610      | -            | -                | -                | -         |   -13.93 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |      720 | 2025-01-06 | FLuffy Gangsters            | W   | 0.592      | 0.417        | 0.004 (0.001)    | 0.316 (0.078)    | 0 (0.000) |     6.67 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |      730 | 2025-01-04 | CS2NEWS                     | W   | 0.576      | 0.417        | 0.000 (0.000)    | 0.043 (0.010)    | 0 (0.000) |     3.67 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |      732 | 2025-01-03 | KONO.ECF                    | L   | 0.571      | -            | -                | -                | -         |   -13.81 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |      745 | 2024-12-28 | BRUTE                       | W   | 0.529      | 0.417        | 0.003 (0.001)    | 0.070 (0.015)    | 0 (0.000) |     5.74 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     1308 | 2024-11-22 | GTZ.ESPORTS                 | W   | 0.291      | 0.143        | 0.061 (0.003)    | 0.369 (0.015)    | 1 (0.291) |     7.21 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            3 |     1399 | 2024-11-17 | Iberian Soul                | W   | 0.257      | 0.143        | 0.011 (0.000)    | 0.638 (0.023)    | 1 (0.257) |     4.25 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            2 |     1434 | 2024-11-16 | The Agency Clan             | W   | 0.250      | 0.143        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.250) |     1.75 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |
|            1 |     1596 | 2024-11-09 | NeverPlay (Portuguese team) | W   | 0.205      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.205) |     1.25 | aragornN, Icarus, P3R3IIRA, seabraez, shr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,660.54)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-22 |      0.291 | $1,047.10      | $304.39         |
| 2024-11-17 |      0.257 | $5,272.32      | $1,356.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
