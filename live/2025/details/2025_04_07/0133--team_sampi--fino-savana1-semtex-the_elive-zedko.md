### Roster Details<br />
Team Name: Team Sampi<br />
Roster: fino, sAvana1, semtex, The eLiVe, ZEDKO<br />
Global Rank: [133](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  670.2<br />
<br />
Final Rank Value (670.2) = Starting Rank Value (697.8) + Head To Head Adjustments (-27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.8
- 400 + ( ( 0.144 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 697.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      992 | 2024-12-07 | CYBERSHOKE Esports     | L   | 0.390      | -            | -                | -                | -         |    -3.90 | fino, sAvana1, semtex, The eLiVe, ZEDKO  |
|            9 |     1033 | 2024-12-05 | Insilio                | L   | 0.378      | -            | -                | -                | -         |    -7.98 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            8 |     1049 | 2024-12-05 | Tricked Esport         | L   | 0.376      | -            | -                | -                | -         |    -4.08 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            7 |     1067 | 2024-12-04 | FLuffy Gangsters       | L   | 0.372      | -            | -                | -                | -         |    -5.93 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            6 |     1136 | 2024-12-01 | Betclic Apogee Esports | L   | 0.349      | -            | -                | -                | -         |    -3.67 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            5 |     1264 | 2024-11-24 | BRUTE                  | W   | 0.302      | 0.143        | 0.003 (0.000)    | 0.070 (0.003)    | 1 (0.302) |     4.54 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            4 |     1292 | 2024-11-23 | UNiTY esports          | L   | 0.296      | -            | -                | -                | -         |    -4.30 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            3 |     1306 | 2024-11-22 | ENTERPRISE Genesis     | W   | 0.291      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.291) |     2.58 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            2 |     1696 | 2024-11-03 | Los kogutos            | L   | 0.163      | -            | -                | -                | -         |    -1.85 | fino, manguss, sAvana1, The eLiVe, ZEDKO |
|            1 |     1787 | 2024-10-29 | 9INE                   | L   | 0.130      | -            | -                | -                | -         |    -3.04 | fino, manguss, sAvana1, The eLiVe, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,497.01)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.303 | $4,932.95      | $1,497.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
