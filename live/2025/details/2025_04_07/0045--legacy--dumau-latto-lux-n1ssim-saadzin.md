### Roster Details<br />
Team Name: Legacy<br />
Roster: dumau, latto, lux, n1ssim, saadzin<br />
Global Rank: [45](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  888.0<br />
<br />
Final Rank Value (888.0) = Starting Rank Value (799.4) + Head To Head Adjustments (88.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.4
- 400 + ( ( 0.193 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 799.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      119 | 2025-02-21 | Imperial Esports   | L   | 0.901      | -            | -                | -                | -         |   -11.73 | dumau, latto, lux, n1ssim, saadzin   |
|           23 |      152 | 2025-02-20 | UNO MILLE          | W   | 0.893      | 0.371        | 0.004 (0.001)    | 0.368 (0.122)    | 0 (0.000) |     6.76 | dumau, latto, lux, n1ssim, saadzin   |
|           22 |      302 | 2025-02-12 | Fluxo              | W   | 0.840      | 0.143        | 0.045 (0.005)    | 0.308 (0.037)    | 0 (0.000) |    13.11 | dumau, latto, lux, n1ssim, saadzin   |
|           21 |      323 | 2025-02-11 | Fluxo              | W   | 0.833      | 0.143        | 0.045 (0.005)    | 0.308 (0.037)    | 0 (0.000) |    13.44 | dumau, latto, lux, n1ssim, saadzin   |
|           20 |      330 | 2025-02-11 | Sharks Esports     | W   | 0.832      | 0.143        | 0.047 (0.006)    | 0.585 (0.070)    | 0 (0.000) |    15.59 | dumau, latto, lux, n1ssim, saadzin   |
|           19 |      427 | 2025-02-08 | BESTIA             | W   | 0.813      | 0.143        | 0.037 (0.004)    | 0.459 (0.053)    | 0 (0.000) |    12.88 | dumau, latto, lux, n1ssim, saadzin   |
|           18 |      429 | 2025-02-08 | LaChampionsLiga    | W   | 0.813      | -            | -                | -                | 0 (0.000) |     5.65 | dumau, latto, lux, n1ssim, saadzin   |
|           17 |      448 | 2025-02-08 | MIBR               | L   | 0.812      | -            | -                | -                | -         |    -1.34 | dumau, latto, lux, n1ssim, saadzin   |
|           16 |      486 | 2025-02-07 | UNO MILLE          | W   | 0.807      | 0.143        | 0.004 (0.000)    | 0.368 (0.042)    | 0 (0.000) |     7.47 | dumau, latto, lux, n1ssim, saadzin   |
|           15 |      495 | 2025-02-07 | Team Solid         | W   | 0.805      | 0.143        | 0.021 (0.002)    | 0.501 (0.058)    | 0 (0.000) |    11.40 | dumau, latto, lux, n1ssim, saadzin   |
|           14 |      538 | 2025-02-05 | Team Solid         | W   | 0.792      | 0.143        | 0.021 (0.002)    | 0.501 (0.057)    | 0 (0.000) |    11.66 | dumau, latto, lux, n1ssim, saadzin   |
|           13 |      547 | 2025-02-05 | Familia Maquininha | W   | 0.791      | -            | -                | -                | -         |     6.78 | dumau, latto, lux, n1ssim, saadzin   |
|           12 |      692 | 2025-01-12 | BESTIA             | L   | 0.632      | -            | -                | -                | -         |    -9.21 | dumau, latto, lux, n1ssim, saadzin   |
|           11 |      694 | 2025-01-11 | Dusty Roots        | W   | 0.626      | 0.384        | 0.009 (0.002)    | 0.334 (0.080)    | -         |     8.33 | dumau, latto, lux, n1ssim, saadzin   |
|           10 |      698 | 2025-01-10 | ShindeN            | W   | 0.620      | 0.384        | -                | 0.343 (0.082)    | -         |     5.67 | dumau, latto, lux, n1ssim, saadzin   |
|            9 |     1496 | 2024-11-14 | RED Canids         | L   | 0.236      | -            | -                | -                | -         |    -4.78 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            8 |     1534 | 2024-11-12 | M80                | L   | 0.228      | -            | -                | -                | -         |    -3.90 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            7 |     1551 | 2024-11-12 | 9z Team            | L   | 0.223      | -            | -                | -                | -         |    -4.55 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            6 |     1563 | 2024-11-11 | FURIA              | W   | 0.221      | 0.143        | 0.078 (0.002)    | -                | 1 (0.221) |     6.56 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            5 |     1857 | 2024-10-19 | NRG                | L   | 0.067      | -            | -                | -                | -         |    -0.68 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            4 |     1897 | 2024-10-17 | M80                | L   | 0.053      | -            | -                | -                | -         |    -0.92 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            3 |     1922 | 2024-10-16 | Nouns Esports      | W   | 0.047      | -            | -                | -                | -         |     0.45 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            2 |     2013 | 2024-10-09 | Familia Maquininha | W   | 0.000      | -            | -                | -                | -         |     0.00 | b4rtiN, dumau, latto, NEKIZ, saadzin |
|            1 |     2020 | 2024-10-09 | Familia Maquininha | W   | 0.000      | -            | -                | -                | -         |     0.00 | b4rtiN, dumau, latto, NEKIZ, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,188.16)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.907 | $750.00        | $680.24         |
| 2025-01-12 |      0.632 | $7,500.00      | $4,743.75       |
| 2024-10-20 |      0.073 | $10,500.00     | $764.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
