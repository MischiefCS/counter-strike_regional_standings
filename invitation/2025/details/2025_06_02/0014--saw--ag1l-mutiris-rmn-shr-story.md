### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, MUTiRiS, rmn, shr, story<br />
Global Rank: [14](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [12]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1327.7<br />
<br />
Final Rank Value (1327.7) = Starting Rank Value (1349.9) + Head To Head Adjustments (-22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.713[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.511[<sup>2</sup>](#table1)

The average of these factors is 0.410<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1349.9
- 400 + ( ( 0.410 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1349.9


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
|           12 |      128 | 2025-02-21 | FaZe Clan       | L   | 0.525      | -            | -                | -                | -         |    -0.63 | Ag1l, MUTiRiS, rmn, shr, story |
|           11 |      175 | 2025-02-18 | 3DMAX           | W   | 0.503      | 1.000        | 0.288 (0.145)    | 0.480 (0.241)    | 1 (0.503) |    11.48 | Ag1l, MUTiRiS, rmn, shr, story |
|           10 |      182 | 2025-02-17 | Complexity      | W   | 0.498      | 1.000        | 0.128 (0.064)    | 0.089 (0.044)    | 1 (0.498) |     2.02 | Ag1l, MUTiRiS, rmn, shr, story |
|            9 |      210 | 2025-02-16 | FlyQuest        | W   | 0.491      | 1.000        | 0.089 (0.044)    | 0.049 (0.024)    | 1 (0.491) |     1.02 | Ag1l, MUTiRiS, rmn, shr, story |
|            8 |      235 | 2025-02-15 | Astralis        | L   | 0.484      | -            | -                | -                | -         |    -0.55 | Ag1l, MUTiRiS, rmn, shr, story |
|            7 |      278 | 2025-02-14 | FaZe Clan       | L   | 0.476      | -            | -                | -                | -         |    -0.59 | Ag1l, MUTiRiS, rmn, shr, story |
|            6 |      529 | 2025-02-06 | 500             | L   | 0.423      | -            | -                | -                | -         |   -11.91 | Ag1l, MUTiRiS, rmn, shr, story |
|            5 |      557 | 2025-02-05 | Eco Warriors    | W   | 0.417      | 0.143        | 0.000 (0.000)    | 0.071 (0.004)    | 0 (0.000) |     0.07 | Ag1l, MUTiRiS, rmn, shr, story |
|            4 |      565 | 2025-02-05 | BC.Game Esports | L   | 0.416      | -            | -                | -                | -         |   -11.87 | Ag1l, MUTiRiS, rmn, shr, story |
|            3 |      631 | 2025-01-30 | Virtus.pro      | L   | 0.377      | -            | -                | -                | -         |    -1.88 | Ag1l, MUTiRiS, rmn, shr, story |
|            2 |      639 | 2025-01-29 | GamerLegion     | L   | 0.370      | -            | -                | -                | -         |    -5.38 | Ag1l, MUTiRiS, rmn, shr, story |
|            1 |      686 | 2025-01-15 | BIG             | L   | 0.277      | -            | -                | -                | -         |    -4.05 | Ag1l, MUTiRiS, rmn, shr, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,754.05)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $62,500.00     | $33,642.94      |
| 2025-02-09 |      0.444 | $2,500.00      | $1,111.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
