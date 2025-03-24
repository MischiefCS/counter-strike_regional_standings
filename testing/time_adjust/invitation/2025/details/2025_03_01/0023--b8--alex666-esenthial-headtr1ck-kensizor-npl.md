### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [23](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  1086.4<br />
<br />
Final Rank Value (1086.4) = Starting Rank Value (1031.8) + Head To Head Adjustments (54.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.525[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.275[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1031.8
- 400 + ( ( 0.327 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 1031.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       92 | 2025-02-23 | BC.Game Esports    | W   | 1.000      | 0.435        | 0.077 (0.034)    | 0.912 (0.396)    | 0 (0.000) |    17.08 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           38 |      100 | 2025-02-23 | 9Pandas            | W   | 1.000      | 0.435        | 0.084 (0.037)    | 0.560 (0.243)    | 0 (0.000) |    14.07 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           37 |      114 | 2025-02-22 | CYBERSHOKE Esports | W   | 1.000      | 0.435        | 0.010 (0.005)    | 1.000 (0.435)    | 0 (0.000) |     9.43 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           36 |      155 | 2025-02-20 | Monte              | W   | 1.000      | 0.435        | 0.016 (0.007)    | 0.477 (0.207)    | 0 (0.000) |     7.99 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           35 |      249 | 2025-02-14 | 500                | L   | 1.000      | -            | -                | -                | -         |   -15.30 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           34 |      271 | 2025-02-14 | Nemiga Gaming      | W   | 1.000      | 0.435        | 0.177 (0.077)    | 0.440 (0.191)    | 0 (0.000) |    11.90 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           33 |      313 | 2025-02-12 | GUN5 Esports       | W   | 1.000      | 0.435        | 0.099 (0.043)    | 0.503 (0.219)    | 0 (0.000) |    11.85 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           32 |      506 | 2025-02-06 | PARIVISION         | L   | 1.000      | -            | -                | -                | -         |   -27.97 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           31 |      516 | 2025-02-06 | Alliance           | W   | 1.000      | 0.435        | 0.015 (0.007)    | 0.595 (0.259)    | 0 (0.000) |     7.84 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           30 |      558 | 2025-02-05 | PARIVISION         | W   | 1.000      | -            | -                | -                | -         |     2.45 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           29 |      570 | 2025-02-04 | Nemiga Gaming      | W   | 1.000      | 0.143        | 0.177 (0.025)    | -                | -         |    13.67 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           28 |      571 | 2025-02-04 | Fire Flux Esports  | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     9.39 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           27 |      605 | 2025-02-01 | Sashi Esport       | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.582 (0.253)    | -         |    11.48 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           26 |      676 | 2025-01-17 | G2 Esports         | L   | 0.914      | -            | -                | -                | -         |    -0.31 | alex666, esenthial, headtr1ck, kensizor, npl     |
|           25 |      919 | 2024-12-11 | ECSTATIC           | L   | 0.670      | -            | -                | -                | -         |   -15.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     1320 | 2024-11-21 | Astralis           | L   | 0.537      | -            | -                | -                | -         |    -0.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     1340 | 2024-11-21 | Aurora Gaming      | L   | 0.532      | -            | -                | -                | -         |   -13.21 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     1356 | 2024-11-20 | Team Spirit        | L   | 0.530      | -            | -                | -                | -         |    -0.09 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     1802 | 2024-10-27 | SAW                | L   | 0.367      | -            | -                | -                | -         |    -2.57 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     1808 | 2024-10-27 | PaiN Gaming        | W   | 0.365      | 0.500        | 0.318 (0.058)    | 0.632 (0.115)    | 1 (0.365) |    11.05 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     1859 | 2024-10-19 | Team Falcons       | L   | 0.313      | -            | -                | -                | -         |    -0.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     1890 | 2024-10-18 | JANO Esports       | W   | 0.305      | -            | -                | -                | 1 (0.305) |     2.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     1937 | 2024-10-16 | The MongolZ        | L   | 0.292      | -            | -                | -                | -         |    -0.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     1938 | 2024-10-16 | Ninjas in Pyjamas  | W   | 0.292      | -            | -                | -                | 1 (0.292) |     2.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     2171 | 2024-10-05 | GamerLegion        | L   | 0.220      | -            | -                | -                | -         |    -0.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     2249 | 2024-10-03 | ALTERNATE aTTaX    | W   | 0.204      | -            | -                | -                | -         |     1.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           13 |     2459 | 2024-09-26 | GamerLegion        | L   | 0.164      | -            | -                | -                | -         |    -4.49 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           12 |     2486 | 2024-09-26 | Illuminar Gaming   | W   | 0.160      | -            | -                | -                | -         |     1.01 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           11 |     2490 | 2024-09-26 | Fire Flux Esports  | W   | 0.159      | -            | -                | -                | -         |     1.15 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           10 |     2509 | 2024-09-25 | Insilio            | W   | 0.157      | -            | -                | -                | -         |     0.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            9 |     2833 | 2024-09-15 | Team Sampi         | L   | 0.090      | -            | -                | -                | -         |    -2.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            8 |     2963 | 2024-09-11 | AMKAL ESPORTS      | L   | 0.063      | -            | -                | -                | -         |    -1.69 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            7 |     3048 | 2024-09-08 | GamerLegion        | W   | 0.039      | -            | -                | -                | -         |     0.16 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            6 |     3050 | 2024-09-08 | Zero Tenacity      | W   | 0.038      | -            | -                | -                | -         |     0.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            5 |     3084 | 2024-09-07 | BC.Game Esports    | W   | 0.032      | -            | -                | -                | -         |     0.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            4 |     3099 | 2024-09-06 | 9Pandas            | L   | 0.026      | -            | -                | -                | -         |    -0.51 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     3132 | 2024-09-05 | SINNERS Esports    | W   | 0.019      | -            | -                | -                | -         |     0.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     3154 | 2024-09-04 | 9INE               | W   | 0.018      | -            | -                | -                | -         |     0.08 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     3214 | 2024-09-03 | TSM                | L   | 0.005      | -            | -                | -                | -         |    -0.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41,869.05)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      1.000 | $22,000.00     | $22,000.00      |
| 2025-02-15 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-10-27 |      0.367 | $20,000.00     | $7,331.48       |
| 2024-10-20 |      0.319 | $3,500.00      | $1,114.81       |
| 2024-10-20 |      0.318 | $15,000.00     | $4,771.18       |
| 2024-10-06 |      0.226 | $2,000.00      | $452.18         |
| 2024-09-28 |      0.173 | $2,000.00      | $345.88         |
| 2024-09-08 |      0.039 | $22,000.00     | $853.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
