### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, dev1ce, jabbi, Staehr, stavn<br />
Global Rank: [8](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  1835.4<br />
<br />
Final Rank Value (1835.4) = Starting Rank Value (1941.4) + Head To Head Adjustments (-106.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.988[<sup>1</sup>](#table2)
- Bounty Collected: 0.618[<sup>2</sup>](#table1)
- Opponent Network: 0.223[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.707<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1941.4
- 400 + ( ( 0.707 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 1941.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       98 | 2025-02-23 | FaZe Clan       | W   | 0.724      | 1.000        | 1.000 (0.724)    | 0.508 (0.368)    | 1 (0.724) |    14.24 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |      113 | 2025-02-22 | MOUZ            | L   | 0.718      | -            | -                | -                | -         |    -8.10 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |      148 | 2025-02-21 | The MongolZ     | W   | 0.710      | 1.000        | 0.879 (0.624)    | 0.520 (0.369)    | 1 (0.710) |    12.05 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |      160 | 2025-02-20 | HEROIC          | L   | 0.704      | -            | -                | -                | -         |   -21.86 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |      176 | 2025-02-18 | BIG             | W   | 0.689      | 1.000        | 0.327 (0.225)    | 0.474 (0.327)    | 1 (0.689) |     1.33 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |      199 | 2025-02-17 | MIBR            | W   | 0.684      | 1.000        | 0.177 (0.121)    | 0.386 (0.264)    | 1 (0.684) |     0.82 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |      214 | 2025-02-16 | Team Falcons    | L   | 0.676      | -            | -                | -                | -         |   -10.16 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |      235 | 2025-02-15 | SAW             | W   | 0.671      | 1.000        | 0.384 (0.258)    | 0.311 (0.209)    | 1 (0.671) |     0.68 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |      273 | 2025-02-14 | PaiN Gaming     | L   | 0.664      | -            | -                | -                | -         |   -16.69 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |      331 | 2025-02-11 | BetBoom Team    | W   | 0.645      | -            | -                | -                | -         |     0.12 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |      339 | 2025-02-11 | Zero Tenacity   | W   | 0.644      | -            | -                | -                | -         |     0.03 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |      365 | 2025-02-10 | BC.Game Esports | L   | 0.638      | -            | -                | -                | -         |   -19.96 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |      373 | 2025-02-10 | OG              | W   | 0.636      | 0.143        | -                | 1.000 (0.091)    | -         |     0.03 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           16 |      401 | 2025-02-09 | PARIVISION      | W   | 0.631      | -            | -                | -                | -         |     0.02 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           15 |      406 | 2025-02-09 | 500             | W   | 0.630      | 0.143        | -                | 1.000 (0.090)    | -         |     0.14 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           14 |      463 | 2025-02-08 | 9INE            | W   | 0.624      | 0.143        | -                | 0.853 (0.076)    | -         |     0.06 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           13 |      582 | 2025-02-04 | GamerLegion     | L   | 0.597      | -            | -                | -                | -         |   -16.98 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           12 |      590 | 2025-02-03 | FURIA           | W   | 0.591      | 1.000        | 0.094 (0.055)    | 0.279 (0.165)    | 1 (0.591) |     0.40 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |      604 | 2025-02-02 | Team Spirit     | L   | 0.583      | -            | -                | -                | -         |    -7.09 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |      620 | 2025-01-31 | PaiN Gaming     | W   | 0.572      | 1.000        | 0.502 (0.287)    | 0.485 (0.277)    | 1 (0.572) |     3.17 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |      629 | 2025-01-30 | FlyQuest        | W   | 0.564      | 1.000        | 0.108 (0.061)    | -                | 1 (0.564) |     0.07 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |      640 | 2025-01-29 | MIBR            | L   | 0.557      | -            | -                | -                | -         |   -17.04 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |      672 | 2025-01-18 | Natus Vincere   | L   | 0.485      | -            | -                | -                | -         |   -13.67 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |      687 | 2025-01-15 | Wildcard        | W   | 0.463      | 0.363        | 0.249 (0.042)    | -                | -         |     0.28 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     1268 | 2024-11-23 | Passion UA      | L   | 0.115      | -            | -                | -                | -         |    -3.60 | br0, cadiaN, jabbi, Staehr, stavn    |
|            4 |     1290 | 2024-11-23 | Eternal Fire    | W   | 0.109      | 0.143        | 0.955 (0.015)    | -                | 1 (0.109) |     1.78 | br0, cadiaN, jabbi, Staehr, stavn    |
|            3 |     1319 | 2024-11-22 | B8              | W   | 0.103      | -            | -                | -                | 1 (0.103) |     0.01 | br0, cadiaN, jabbi, Staehr, stavn    |
|            2 |     1339 | 2024-11-21 | Sashi Esport    | L   | 0.097      | -            | -                | -                | -         |    -3.04 | br0, cadiaN, jabbi, Staehr, stavn    |
|            1 |     1350 | 2024-11-20 | 9Pandas         | L   | 0.095      | -            | -                | -                | -         |    -2.99 | br0, cadiaN, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,840.83)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.97) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.725 | $150,000.00    | $108,743.06     |
| 2025-02-09 |      0.631 | $16,000.00     | $10,097.78      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
