### Roster Details<br />
Team Name: KRÜ Esports<br />
Roster: atarax1a, chshekin, deco, reversive, righi<br />
Global Rank: [202](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [64]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  391.9<br />
<br />
Final Rank Value (391.9) = Starting Rank Value (404.9) + Head To Head Adjustments (-13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.009[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 404.9
- 400 + ( ( 0.002 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 404.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      222 | 2025-02-15 | Game Hunters           | L   | 0.674      | -            | -                | -                | -         |    -5.53 | atarax1a, chshekin, deco, reversive, righi |
|           11 |      265 | 2025-02-14 | Bounty Hunters Esports | L   | 0.665      | -            | -                | -                | -         |    -6.41 | atarax1a, chshekin, deco, reversive, righi |
|           10 |      307 | 2025-02-12 | UNO MILLE              | L   | 0.652      | -            | -                | -                | -         |    -7.19 | atarax1a, chshekin, deco, reversive, righi |
|            9 |      390 | 2025-02-09 | Atrix Esports          | W   | 0.633      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.76 | atarax1a, chshekin, deco, reversive, righi |
|            8 |      432 | 2025-02-08 | Imperial Esports       | L   | 0.626      | -            | -                | -                | -         |    -1.14 | atarax1a, chshekin, deco, reversive, righi |
|            7 |      489 | 2025-02-07 | PaiN Gaming Academy    | W   | 0.620      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     9.84 | atarax1a, chshekin, deco, reversive, righi |
|            6 |      521 | 2025-02-06 | Fake do Biru           | L   | 0.611      | -            | -                | -                | -         |    -5.95 | atarax1a, chshekin, deco, reversive, righi |
|            5 |      544 | 2025-02-05 | AdalYamigos            | L   | 0.605      | -            | -                | -                | -         |    -6.91 | atarax1a, chshekin, deco, reversive, righi |
|            4 |     1502 | 2024-11-13 | Imperial Esports       | L   | 0.049      | -            | -                | -                | -         |    -0.10 | atarax1a, deco, laser, reversive, righi    |
|            3 |     1529 | 2024-11-12 | Nouns Esports          | W   | 0.042      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.042) |     0.65 | atarax1a, deco, laser, reversive, righi    |
|            2 |     1540 | 2024-11-12 | Team Liquid            | L   | 0.037      | -            | -                | -                | -         |    -0.01 | atarax1a, deco, laser, reversive, righi    |
|            1 |     1557 | 2024-11-11 | MIBR                   | L   | 0.036      | -            | -                | -                | -         |    -0.01 | atarax1a, deco, laser, reversive, righi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
