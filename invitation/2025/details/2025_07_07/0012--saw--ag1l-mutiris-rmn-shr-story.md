### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, MUTiRiS, rmn, shr, story<br />
Global Rank: [12](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [10]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1413.8<br />
<br />
Final Rank Value (1413.8) = Starting Rank Value (1425.3) + Head To Head Adjustments (-11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.715[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.586[<sup>2</sup>](#table1)

The average of these factors is 0.416<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1425.3
- 400 + ( ( 0.416 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 1425.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      128 | 2025-02-21 | FaZe Clan       | L   | 0.292      | -            | -                | -                | -         |    -0.68 | Ag1l, MUTiRiS, rmn, shr, story |
|           11 |      175 | 2025-02-18 | 3DMAX           | W   | 0.270      | 1.000        | 0.263 (0.071)    | 0.486 (0.131)    | 1 (0.270) |     5.00 | Ag1l, MUTiRiS, rmn, shr, story |
|           10 |      182 | 2025-02-17 | Complexity      | W   | 0.265      | 1.000        | 0.127 (0.034)    | 0.101 (0.027)    | 1 (0.265) |     0.81 | Ag1l, MUTiRiS, rmn, shr, story |
|            9 |      210 | 2025-02-16 | FlyQuest        | W   | 0.257      | 1.000        | 0.088 (0.023)    | 0.014 (0.004)    | 1 (0.257) |     0.31 | Ag1l, MUTiRiS, rmn, shr, story |
|            8 |      235 | 2025-02-15 | Astralis        | L   | 0.251      | -            | -                | -                | -         |    -0.39 | Ag1l, MUTiRiS, rmn, shr, story |
|            7 |      278 | 2025-02-14 | FaZe Clan       | L   | 0.243      | -            | -                | -                | -         |    -0.58 | Ag1l, MUTiRiS, rmn, shr, story |
|            6 |      529 | 2025-02-06 | 500             | L   | 0.189      | -            | -                | -                | -         |    -5.61 | Ag1l, MUTiRiS, rmn, shr, story |
|            5 |      557 | 2025-02-05 | Eco Warriors    | W   | 0.184      | 0.143        | 0.000 (0.000)    | 0.062 (0.002)    | 0 (0.000) |     0.02 | Ag1l, MUTiRiS, rmn, shr, story |
|            4 |      565 | 2025-02-05 | BC.Game Esports | L   | 0.183      | -            | -                | -                | -         |    -5.44 | Ag1l, MUTiRiS, rmn, shr, story |
|            3 |      631 | 2025-01-30 | Virtus.pro      | L   | 0.143      | -            | -                | -                | -         |    -1.19 | Ag1l, MUTiRiS, rmn, shr, story |
|            2 |      639 | 2025-01-29 | GamerLegion     | L   | 0.137      | -            | -                | -                | -         |    -2.98 | Ag1l, MUTiRiS, rmn, shr, story |
|            1 |      686 | 2025-01-15 | BIG             | L   | 0.044      | -            | -                | -                | -         |    -0.80 | Ag1l, MUTiRiS, rmn, shr, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,587.38)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $62,500.00     | $19,059.61      |
| 2025-02-09 |      0.211 | $2,500.00      | $527.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
