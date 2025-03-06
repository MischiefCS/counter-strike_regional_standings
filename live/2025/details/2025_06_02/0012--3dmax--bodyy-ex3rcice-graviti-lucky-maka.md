### Roster Details<br />
Team Name: 3DMAX<br />
Roster: bodyy, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [12](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [10]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  1483.9<br />
<br />
Final Rank Value (1483.9) = Starting Rank Value (1488.9) + Head To Head Adjustments (-4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.649[<sup>1</sup>](#table2)
- Bounty Collected: 0.433[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.724[<sup>2</sup>](#table1)

The average of these factors is 0.470<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1488.9
- 400 + ( ( 0.470 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 1488.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      175 | 2025-02-18 | SAW                        | L   | 0.503      | -            | -                | -                | -         |   -11.48 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           16 |      198 | 2025-02-17 | Eternal Fire               | L   | 0.497      | -            | -                | -                | -         |    -1.19 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           15 |      216 | 2025-02-16 | MIBR                       | W   | 0.489      | 1.000        | 0.153 (0.075)    | 0.317 (0.155)    | 1 (0.489) |     1.90 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           14 |      252 | 2025-02-15 | MOUZ                       | L   | 0.482      | -            | -                | -                | -         |    -1.02 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           13 |      281 | 2025-02-14 | Virtus.pro                 | W   | 0.476      | 1.000        | 0.420 (0.200)    | 0.458 (0.218)    | 1 (0.476) |    10.58 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           12 |      361 | 2025-02-10 | HEROIC                     | W   | 0.452      | 0.143        | 0.123 (0.008)    | 0.538 (0.035)    | 0 (0.000) |     0.99 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           11 |      368 | 2025-02-10 | NEVERMORE (Ukrainian team) | W   | 0.450      | 0.143        | 0.000 (0.000)    | 0.160 (0.010)    | 0 (0.000) |     0.04 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|           10 |      587 | 2025-02-03 | Eternal Fire               | L   | 0.405      | -            | -                | -                | -         |    -0.86 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            9 |      595 | 2025-02-02 | BIG                        | W   | 0.399      | 1.000        | 0.295 (0.118)    | 0.449 (0.179)    | 1 (0.399) |     4.27 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            8 |      617 | 2025-02-01 | Team Vitality              | L   | 0.390      | -            | -                | -                | -         |    -1.99 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            7 |      628 | 2025-01-30 | MIBR                       | W   | 0.378      | 1.000        | 0.153 (0.058)    | 0.317 (0.120)    | 1 (0.378) |     1.71 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            6 |      643 | 2025-01-29 | FlyQuest                   | W   | 0.369      | 1.000        | 0.089 (0.033)    | 0.049 (0.018)    | 1 (0.369) |     0.32 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            5 |      690 | 2025-01-14 | HEROIC                     | L   | 0.270      | -            | -                | -                | -         |    -7.97 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            4 |     1002 | 2024-12-06 | MOUZ                       | L   | 0.014      | -            | -                | -                | -         |    -0.02 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            3 |     1028 | 2024-12-05 | G2 Esports                 | L   | 0.008      | -            | -                | -                | -         |    -0.20 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            2 |     1040 | 2024-12-05 | PaiN Gaming                | W   | 0.003      | 1.000        | 0.481 (0.002)    | 0.453 (0.001)    | 1 (0.003) |     0.07 | Djoko, Ex3rcice, Graviti, Lucky, Maka |
|            1 |     1055 | 2024-12-04 | MIBR                       | L   | 0.002      | -            | -                | -                | -         |    -0.05 | Djoko, Ex3rcice, Graviti, Lucky, Maka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,318.23)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $31,250.00     | $16,821.47      |
| 2025-02-09 |      0.444 | $16,000.00     | $7,111.11       |
| 2024-12-15 |      0.069 | $20,000.00     | $1,385.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
