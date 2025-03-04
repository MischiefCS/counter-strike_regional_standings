### Roster Details<br />
Team Name: Thekillaz<br />
Roster: cellax, fly, hera, samys, showliana<br />
Global Rank: [219](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [63]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  603.2<br />
<br />
Final Rank Value (603.2) = Starting Rank Value (606.6) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.6
- 400 + ( ( 0.109 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 606.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1878 | 2024-10-18 | Atrix Esports        | L   | 0.307      | -            | -                | -                | -         |    -4.71 | cellax, fly, hera, samys, showliana |
|            9 |     2238 | 2024-10-03 | Capivaras            | W   | 0.207      | 0.383        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.43 | cellax, fly, hera, samys, showliana |
|            8 |     2406 | 2024-09-28 | MIBR Female          | L   | 0.174      | -            | -                | -                | -         |    -2.50 | cellax, fly, hera, samys, showliana |
|            7 |     2445 | 2024-09-27 | InSanitY Female      | W   | 0.167      | 0.463        | 0.001 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     2.65 | cellax, fly, hera, samys, showliana |
|            6 |     2535 | 2024-09-25 | MIBR Female          | L   | 0.154      | -            | -                | -                | -         |    -2.23 | cellax, fly, hera, samys, showliana |
|            5 |     2635 | 2024-09-23 | FURIA Esports Female | L   | 0.141      | -            | -                | -                | -         |    -0.47 | cellax, fly, hera, samys, showliana |
|            4 |     2642 | 2024-09-23 | InSanitY Female      | W   | 0.140      | 0.463        | 0.001 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     2.23 | cellax, fly, hera, samys, showliana |
|            3 |     2773 | 2024-09-18 | InSanitY Female      | L   | 0.107      | -            | -                | -                | -         |    -1.68 | cellax, fly, hera, samys, showliana |
|            2 |     2936 | 2024-09-12 | Peak Academy Female  | W   | 0.067      | 0.383        | 0.001 (0.000)    | 0.018 (0.000)    | 0 (0.000) |     1.04 | cellax, fly, hera, samys, showliana |
|            1 |     3167 | 2024-09-04 | Fluxo Demons         | L   | 0.014      | -            | -                | -                | -         |    -0.14 | cellax, fly, hera, samys, showliana |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($383.85)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.307 | $1,250.00      | $383.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
