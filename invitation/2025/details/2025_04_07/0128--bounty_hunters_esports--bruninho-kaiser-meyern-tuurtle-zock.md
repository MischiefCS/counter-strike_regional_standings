### Roster Details<br />
Team Name: Bounty Hunters Esports<br />
Roster: Bruninho, KAISER, meyern, Tuurtle, zock<br />
Global Rank: [128](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [31]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  683.4<br />
<br />
Final Rank Value (683.4) = Starting Rank Value (663.9) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.9
- 400 + ( ( 0.128 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 663.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      153 | 2025-02-20 | Sharks Esports | L   | 0.893      | -            | -                | -                | -         |    -6.03 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            8 |      224 | 2025-02-15 | Dusty Roots    | W   | 0.859      | 0.371        | 0.009 (0.003)    | 0.334 (0.106)    | 0 (0.000) |    15.32 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            7 |      265 | 2025-02-14 | KRÜ Esports    | W   | 0.852      | 0.371        | 0.000 (0.000)    | 0.150 (0.047)    | 0 (0.000) |    10.98 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            6 |      328 | 2025-02-11 | AdalYamigos    | W   | 0.833      | 0.371        | 0.001 (0.000)    | 0.200 (0.062)    | 0 (0.000) |    12.40 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            5 |      348 | 2025-02-10 | UNO MILLE      | L   | 0.827      | -            | -                | -                | -         |   -12.46 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            4 |      512 | 2025-02-06 | BESTIA         | L   | 0.799      | -            | -                | -                | -         |    -7.25 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            3 |      536 | 2025-02-05 | ODDIK          | L   | 0.792      | -            | -                | -                | -         |    -8.81 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            2 |      543 | 2025-02-05 | BESTIA         | W   | 0.791      | 0.143        | 0.037 (0.004)    | 0.459 (0.052)    | 0 (0.000) |    17.72 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            1 |     1703 | 2024-11-02 | UNO MILLE      | L   | 0.159      | -            | -                | -                | -         |    -2.37 | bnc, Bruninho, KAISER, meyern, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($165.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.165 | $1,000.00      | $165.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
