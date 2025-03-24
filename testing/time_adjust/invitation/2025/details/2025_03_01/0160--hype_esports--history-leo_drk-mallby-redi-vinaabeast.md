### Roster Details<br />
Team Name: Hype Esports<br />
Roster: history, leo_drk, MaLLby, redi, vinaabEAST<br />
Global Rank: [160](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [38]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  667.5<br />
<br />
Final Rank Value (667.5) = Starting Rank Value (657.0) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.0
- 400 + ( ( 0.133 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 657.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1619 | 2024-11-08 | Team Solid       | L   | 0.445      | -            | -                | -                | -         |    -4.58 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           17 |     1644 | 2024-11-06 | ShindeN          | W   | 0.435      | 0.371        | 0.005 (0.001)    | 0.377 (0.061)    | 0 (0.000) |     7.30 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           16 |     2027 | 2024-10-09 | Case Esports     | L   | 0.248      | -            | -                | -                | -         |    -4.03 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           15 |     2032 | 2024-10-09 | Case Esports     | W   | 0.248      | 0.450        | 0.001 (0.000)    | 0.056 (0.006)    | 0 (0.000) |     3.85 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           14 |     2082 | 2024-10-08 | Team Solid       | W   | 0.241      | 0.450        | 0.023 (0.002)    | 0.571 (0.062)    | 0 (0.000) |     5.35 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           13 |     2087 | 2024-10-08 | Team Solid       | L   | 0.241      | -            | -                | -                | -         |    -2.28 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           12 |     2263 | 2024-10-02 | Imperial Esports | L   | 0.201      | -            | -                | -                | -         |    -1.08 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           11 |     2269 | 2024-10-02 | Imperial Esports | L   | 0.201      | -            | -                | -                | -         |    -1.09 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|           10 |     2324 | 2024-10-01 | PaiN Gaming      | L   | 0.195      | -            | -                | -                | -         |    -0.03 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            9 |     2328 | 2024-10-01 | PaiN Gaming      | L   | 0.195      | -            | -                | -                | -         |    -0.03 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            8 |     2429 | 2024-09-27 | Fluxo            | L   | 0.168      | -            | -                | -                | -         |    -1.06 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            7 |     2469 | 2024-09-26 | Galorys          | W   | 0.162      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.38 | history, leo_drk, MaLLby, rainny, vinaabEAST |
|            6 |     2525 | 2024-09-25 | Sharks Esports   | W   | 0.155      | 0.450        | 0.054 (0.004)    | 0.661 (0.046)    | 0 (0.000) |     4.16 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            5 |     2532 | 2024-09-25 | Sharks Esports   | L   | 0.155      | -            | -                | -                | -         |    -0.72 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            4 |     2588 | 2024-09-24 | BESTIA           | L   | 0.148      | -            | -                | -                | -         |    -1.17 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            3 |     2594 | 2024-09-24 | BESTIA           | W   | 0.148      | 0.450        | 0.045 (0.003)    | 0.573 (0.038)    | 0 (0.000) |     3.52 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            2 |     2800 | 2024-09-17 | Dusty Roots      | L   | 0.101      | -            | -                | -                | -         |    -1.13 | history, leo_drk, MaLLby, redi, vinaabEAST   |
|            1 |     2802 | 2024-09-17 | Dusty Roots      | W   | 0.101      | 0.450        | 0.008 (0.000)    | 0.422 (0.019)    | 0 (0.000) |     2.07 | history, leo_drk, MaLLby, redi, vinaabEAST   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($436.67)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.454 | $750.00        | $340.85         |
| 2024-10-20 |      0.319 | $300.00        | $95.82          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
