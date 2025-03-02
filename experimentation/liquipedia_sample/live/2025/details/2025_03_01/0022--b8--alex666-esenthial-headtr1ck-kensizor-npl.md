### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [22](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1163.4<br />
<br />
Final Rank Value (1163.4) = Starting Rank Value (1135.7) + Head To Head Adjustments (27.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.525[<sup>1</sup>](#table2)
- Bounty Collected: 0.438[<sup>2</sup>](#table1)
- Opponent Network: 0.336[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.374<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1135.7
- 400 + ( ( 0.374 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 1135.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       20 | 2025-02-26 | RUSH B (Russian team) | W   | 1.000      | 0.500        | 0.028 (0.014)    | 0.850 (0.425)    | 0 (0.000) |     6.64 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           51 |       85 | 2025-02-23 | BC.Game Esports       | W   | 1.000      | 0.435        | 0.077 (0.034)    | 0.832 (0.362)    | 0 (0.000) |    16.18 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           50 |       91 | 2025-02-23 | 9Pandas               | W   | 1.000      | 0.435        | 0.088 (0.038)    | 0.627 (0.273)    | 0 (0.000) |    11.72 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           49 |      107 | 2025-02-22 | CYBERSHOKE Esports    | W   | 1.000      | 0.435        | -                | 0.821 (0.357)    | 0 (0.000) |     6.46 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           48 |      149 | 2025-02-20 | Monte                 | W   | 1.000      | 0.435        | 0.045 (0.019)    | 0.783 (0.340)    | 0 (0.000) |     8.61 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           47 |      166 | 2025-02-19 | Iberian Soul          | W   | 1.000      | 0.500        | -                | 0.556 (0.278)    | -         |     4.37 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           46 |      230 | 2025-02-15 | 500                   | L   | 1.000      | -            | -                | -                | -         |   -17.71 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           45 |      251 | 2025-02-14 | Nemiga Gaming         | W   | 1.000      | 0.435        | 0.177 (0.077)    | -                | -         |    10.64 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           44 |      296 | 2025-02-12 | GUN5 Esports          | W   | 1.000      | 0.435        | 0.104 (0.045)    | 0.575 (0.250)    | -         |     9.15 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           43 |      513 | 2025-02-07 | Benched               | L   | 1.000      | -            | -                | -                | -         |   -30.27 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           42 |      545 | 2025-02-07 | PARIVISION            | L   | 1.000      | -            | -                | -                | -         |   -28.58 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           41 |      557 | 2025-02-06 | Alliance              | W   | 1.000      | -            | -                | -                | -         |     5.72 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           40 |      601 | 2025-02-05 | PARIVISION            | W   | 1.000      | -            | -                | -                | -         |     2.31 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           39 |      611 | 2025-02-05 | Nemiga Gaming         | W   | 1.000      | 0.143        | 0.177 (0.025)    | -                | -         |    11.34 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           38 |      616 | 2025-02-04 | Fire Flux Esports     | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     7.63 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           37 |      653 | 2025-02-02 | Sashi Esport          | W   | 1.000      | 0.435        | -                | 0.585 (0.254)    | -         |     8.62 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           36 |      710 | 2025-01-28 | Zero Tenacity         | W   | 0.987      | 0.500        | -                | 0.786 (0.388)    | -         |     6.33 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           35 |      741 | 2025-01-24 | ARCRED                | W   | 0.960      | -            | -                | -                | -         |     4.64 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           34 |      761 | 2025-01-22 | Team Spirit Academy   | L   | 0.947      | -            | -                | -                | -         |   -18.72 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           33 |      774 | 2025-01-17 | G2 Esports            | L   | 0.914      | -            | -                | -                | -         |    -0.57 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           32 |     1454 | 2024-12-12 | ECSTATIC              | L   | 0.671      | -            | -                | -                | -         |   -16.73 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     2559 | 2024-11-22 | Astralis              | L   | 0.538      | -            | -                | -                | -         |    -0.42 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     2615 | 2024-11-21 | Aurora Gaming         | L   | 0.531      | -            | -                | -                | -         |   -14.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     2634 | 2024-11-20 | Team Spirit           | L   | 0.529      | -            | -                | -                | -         |    -0.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3971 | 2024-10-27 | SAW                   | L   | 0.367      | -            | -                | -                | -         |    -3.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3984 | 2024-10-27 | PaiN Gaming           | W   | 0.366      | 0.500        | 0.318 (0.058)    | -                | 1 (0.366) |    10.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     4026 | 2024-10-26 | Eternal Fire          | W   | 0.359      | 0.500        | 0.591 (0.106)    | -                | 1 (0.359) |    11.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     4114 | 2024-10-25 | SAW                   | L   | 0.353      | -            | -                | -                | -         |    -3.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     4126 | 2024-10-25 | Eternal Fire          | W   | 0.351      | 0.500        | 0.591 (0.104)    | -                | 1 (0.351) |    10.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     4345 | 2024-10-19 | Team Falcons          | L   | 0.313      | -            | -                | -                | -         |    -0.14 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     4409 | 2024-10-18 | JANO Esports          | W   | 0.305      | -            | -                | -                | 1 (0.305) |     1.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     4516 | 2024-10-16 | The MongolZ           | L   | 0.292      | -            | -                | -                | -         |    -0.11 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     4520 | 2024-10-16 | Ninjas in Pyjamas     | W   | 0.292      | -            | -                | -                | 1 (0.292) |     1.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     5053 | 2024-10-05 | GamerLegion           | L   | 0.220      | -            | -                | -                | -         |    -0.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     5199 | 2024-10-03 | ALTERNATE aTTaX       | W   | 0.205      | -            | -                | -                | -         |     1.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     5478 | 2024-09-28 | 3DMAX                 | W   | 0.173      | -            | -                | -                | -         |     5.00 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     5568 | 2024-09-27 | SAW                   | W   | 0.167      | -            | -                | -                | -         |     3.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     5592 | 2024-09-27 | OG                    | W   | 0.165      | -            | -                | -                | -         |     1.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     5600 | 2024-09-27 | GamerLegion           | L   | 0.165      | -            | -                | -                | -         |    -4.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           13 |     5645 | 2024-09-26 | Fire Flux Esports     | W   | 0.160      | -            | -                | -                | -         |     1.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           12 |     5650 | 2024-09-26 | Illuminar Gaming      | W   | 0.159      | -            | -                | -                | -         |     0.98 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           11 |     5681 | 2024-09-26 | Insilio               | W   | 0.157      | -            | -                | -                | -         |     0.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           10 |     5724 | 2024-09-25 | BC.Game Esports       | W   | 0.154      | -            | -                | -                | -         |     0.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            9 |     6328 | 2024-09-16 | Team Sampi            | L   | 0.091      | -            | -                | -                | -         |    -2.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            8 |     6570 | 2024-09-12 | AMKAL ESPORTS         | L   | 0.064      | -            | -                | -                | -         |    -1.76 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            7 |     6762 | 2024-09-08 | GamerLegion           | W   | 0.039      | -            | -                | -                | -         |     0.10 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            6 |     6771 | 2024-09-08 | Zero Tenacity         | W   | 0.039      | -            | -                | -                | -         |     0.19 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            5 |     6839 | 2024-09-07 | BC.Game Esports       | W   | 0.032      | -            | -                | -                | -         |     0.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            4 |     6908 | 2024-09-06 | 9Pandas               | L   | 0.027      | -            | -                | -                | -         |    -0.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     6988 | 2024-09-05 | SINNERS Esports       | W   | 0.020      | -            | -                | -                | -         |     0.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     7026 | 2024-09-05 | 9INE                  | W   | 0.018      | -            | -                | -                | -         |     0.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     7141 | 2024-09-03 | TSM                   | L   | 0.005      | -            | -                | -                | -         |    -0.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,902.71)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $22,000.00     | $22,000.00      |
| 2025-02-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-27 |      0.367 | $20,000.00     | $7,331.48       |
| 2024-10-20 |      0.319 | $3,500.00      | $1,117.08       |
| 2024-10-20 |      0.319 | $15,000.00     | $4,786.46       |
| 2024-10-06 |      0.227 | $2,000.00      | $453.47         |
| 2024-09-28 |      0.173 | $2,000.00      | $346.44         |
| 2024-09-08 |      0.039 | $22,000.00     | $867.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
