### Roster Details<br />
Team Name: Bounty Hunters Esports<br />
Roster: Bruninho, KAISER, meyern, Tuurtle, zock<br />
Global Rank: [134](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  741.9<br />
<br />
Final Rank Value (741.9) = Starting Rank Value (710.5) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.163<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.5
- 400 + ( ( 0.163 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 710.5


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
|            9 |      153 | 2025-02-20 | Sharks Esports | L   | 1.000      | -            | -                | -                | -         |    -4.89 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            8 |      224 | 2025-02-15 | Dusty Roots    | W   | 1.000      | 0.580        | 0.008 (0.005)    | 0.422 (0.245)    | 0 (0.000) |    16.66 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            7 |      265 | 2025-02-14 | KRÜ Esports    | W   | 1.000      | 0.578        | 0.001 (0.001)    | 0.169 (0.098)    | 0 (0.000) |    13.27 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            6 |      328 | 2025-02-11 | AdalYamigos    | W   | 1.000      | 0.574        | 0.003 (0.002)    | 0.226 (0.130)    | 0 (0.000) |    18.43 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            5 |      348 | 2025-02-10 | UNO MILLE      | L   | 1.000      | -            | -                | -                | -         |   -15.45 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            4 |      512 | 2025-02-06 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -6.07 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            3 |      536 | 2025-02-05 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |    -9.90 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            2 |      543 | 2025-02-05 | BESTIA         | W   | 1.000      | 0.871        | 0.045 (0.039)    | 0.572 (0.499)    | 0 (0.000) |    25.57 | Bruninho, KAISER, meyern, Tuurtle, zock  |
|            1 |     1703 | 2024-11-02 | UNO MILLE      | L   | 0.407      | -            | -                | -                | -         |    -6.23 | bnc, Bruninho, KAISER, meyern, SHOOWTiME |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($413.33)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.413 | $1,000.00      | $413.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
