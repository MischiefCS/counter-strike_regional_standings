### Roster Details<br />
Team Name: Team Liquid<br />
Roster: jks, NAF, NertZ, Twistzz, ultimate<br />
Global Rank: [15](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [2]( ../../standings_americas_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [2]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  1361.8<br />
<br />
Final Rank Value (1361.8) = Starting Rank Value (1355.3) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.571[<sup>1</sup>](#table2)
- Bounty Collected: 0.497[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.593[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1355.3
- 400 + ( ( 0.439 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 1355.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      581 | 2025-02-04 | Team Spirit   | L   | 0.597      | -            | -                | -                | -         |    -0.59 | jks, NAF, NertZ, Twistzz, ultimate    |
|           19 |      593 | 2025-02-03 | MOUZ          | W   | 0.590      | 1.000        | 1.000 (0.590)    | 0.536 (0.316)    | 1 (0.590) |    17.98 | jks, NAF, NertZ, Twistzz, ultimate    |
|           18 |      603 | 2025-02-02 | The MongolZ   | L   | 0.583      | -            | -                | -                | -         |    -0.98 | jks, NAF, NertZ, Twistzz, ultimate    |
|           17 |      621 | 2025-01-31 | Wildcard      | W   | 0.572      | 1.000        | 0.249 (0.142)    | 0.349 (0.200)    | 1 (0.572) |     6.28 | jks, NAF, NertZ, Twistzz, ultimate    |
|           16 |      625 | 2025-01-31 | Complexity    | W   | 0.570      | 1.000        | 0.145 (0.083)    | 0.125 (0.071)    | 1 (0.570) |     2.52 | jks, NAF, NertZ, Twistzz, ultimate    |
|           15 |      633 | 2025-01-29 | HEROIC        | L   | 0.558      | -            | -                | -                | -         |   -14.94 | jks, NAF, NertZ, Twistzz, ultimate    |
|           14 |      675 | 2025-01-18 | HEROIC        | L   | 0.483      | -            | -                | -                | -         |   -13.22 | jks, NAF, NertZ, Twistzz, ultimate    |
|           13 |      689 | 2025-01-14 | 9Pandas       | W   | 0.458      | 0.363        | 0.071 (0.012)    | 0.281 (0.047)    | -         |     0.86 | jks, NAF, NertZ, Twistzz, ultimate    |
|           12 |      918 | 2024-12-12 | Team Spirit   | L   | 0.236      | -            | -                | -                | -         |    -0.24 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|           11 |      999 | 2024-12-06 | MIBR          | W   | 0.202      | 1.000        | 0.177 (0.036)    | 0.386 (0.078)    | 1 (0.202) |     2.59 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|           10 |     1029 | 2024-12-05 | FURIA         | W   | 0.194      | 1.000        | 0.094 (0.018)    | 0.279 (0.054)    | 1 (0.194) |     1.87 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            9 |     1052 | 2024-12-05 | GamerLegion   | W   | 0.189      | 1.000        | 0.166 (0.031)    | 0.491 (0.093)    | 1 (0.189) |     3.88 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            8 |     1062 | 2024-12-04 | Natus Vincere | L   | 0.188      | -            | -                | -                | -         |    -1.51 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            7 |     1141 | 2024-11-30 | FlyQuest      | W   | 0.161      | 1.000        | 0.108 (0.017)    | 0.085 (0.014)    | 1 (0.161) |     0.39 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            6 |     1166 | 2024-11-30 | Wildcard      | W   | 0.156      | 1.000        | 0.249 (0.039)    | 0.349 (0.055)    | 1 (0.156) |     1.60 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            5 |     1178 | 2024-11-29 | Cloud9        | W   | 0.155      | 1.000        | 0.021 (0.003)    | 0.042 (0.007)    | 1 (0.155) |     0.19 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            4 |     1497 | 2024-11-14 | FURIA         | W   | 0.049      | -            | -                | -                | 1 (0.049) |     0.46 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            3 |     1532 | 2024-11-12 | BESTIA        | W   | 0.041      | -            | -                | -                | -         |     0.06 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            2 |     1540 | 2024-11-12 | KRÜ Esports   | W   | 0.037      | -            | -                | -                | -         |     0.01 | jks, NAF, Twistzz, ultimate, YEKINDAR |
|            1 |     1564 | 2024-11-11 | Wildcard      | L   | 0.034      | -            | -                | -                | -         |    -0.73 | jks, NAF, Twistzz, ultimate, YEKINDAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,615.49)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-09 |      0.631 | $16,000.00     | $10,097.78      |
| 2024-12-15 |      0.256 | $45,000.00     | $11,517.71      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
