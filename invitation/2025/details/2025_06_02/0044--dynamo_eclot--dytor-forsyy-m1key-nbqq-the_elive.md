### Roster Details<br />
Team Name: Dynamo Eclot<br />
Roster: Dytor, forsyy, M1key, nbqq, The eLiVe<br />
Global Rank: [44](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  781.5<br />
<br />
Final Rank Value (781.5) = Starting Rank Value (781.4) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.403[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.4
- 400 + ( ( 0.165 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 781.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      118 | 2025-02-22 | 9Pandas              | L   | 0.529      | -            | -                | -                | -         |    -7.46 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|           10 |      158 | 2025-02-20 | Fnatic               | W   | 0.517      | 0.435        | 0.000 (0.000)    | 0.480 (0.108)    | 0 (0.000) |     5.39 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            9 |      274 | 2025-02-14 | 500                  | L   | 0.477      | -            | -                | -                | -         |    -3.92 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            8 |      308 | 2025-02-12 | Team Spirit Academy  | W   | 0.465      | 0.435        | 0.018 (0.004)    | 0.291 (0.059)    | 0 (0.000) |     6.98 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            7 |      528 | 2025-02-06 | 9INE                 | L   | 0.423      | -            | -                | -                | -         |    -6.89 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            6 |      554 | 2025-02-05 | Nexus Gaming         | W   | 0.417      | 0.143        | 0.017 (0.001)    | 0.130 (0.008)    | 0 (0.000) |     5.48 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            5 |      822 | 2024-12-17 | GUN5 Esports         | L   | 0.085      | -            | -                | -                | -         |    -1.26 | Dytor, forsyy, kreaz, M1key, nbqq     |
|            4 |      832 | 2024-12-16 | Monte                | W   | 0.078      | 0.435        | 0.005 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     0.91 | Dytor, forsyy, kreaz, M1key, nbqq     |
|            3 |      873 | 2024-12-14 | ECSTATIC             | W   | 0.065      | 0.435        | 0.008 (0.000)    | 0.830 (0.023)    | 0 (0.000) |     0.94 | Dytor, forsyy, kreaz, M1key, nbqq     |
|            2 |      898 | 2024-12-13 | Natus Vincere Junior | L   | 0.058      | -            | -                | -                | -         |    -0.76 | Dytor, forsyy, kreaz, M1key, nbqq     |
|            1 |      913 | 2024-12-12 | ECSTATIC             | W   | 0.051      | 0.435        | 0.008 (0.000)    | 0.830 (0.018)    | 0 (0.000) |     0.74 | Dytor, forsyy, kreaz, M1key, nbqq     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,896.67)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $2,000.00      | $1,076.30       |
| 2025-02-15 |      0.485 | $2,000.00      | $970.37         |
| 2024-12-17 |      0.085 | $10,000.00     | $850.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
