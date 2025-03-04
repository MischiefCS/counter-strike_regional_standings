### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [67](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [48]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  891.3<br />
<br />
Final Rank Value (891.3) = Starting Rank Value (870.7) + Head To Head Adjustments (20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.7
- 400 + ( ( 0.247 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 870.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1261 | 2024-11-24 | Team Spirit   | L   | 0.552      | -            | -                | -                | -         |    -0.04 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1269 | 2024-11-23 | 9Pandas       | W   | 0.549      | 1.000        | 0.084 (0.046)    | 0.560 (0.307)    | 1 (0.549) |    13.34 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     1295 | 2024-11-22 | TSM           | W   | 0.544      | 1.000        | 0.009 (0.005)    | 0.167 (0.091)    | 1 (0.544) |     5.75 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     1326 | 2024-11-21 | Team Falcons  | L   | 0.536      | -            | -                | -                | -         |    -0.07 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     1344 | 2024-11-21 | PARIVISION    | W   | 0.531      | 1.000        | 0.006 (0.003)    | 0.077 (0.041)    | 1 (0.531) |     5.38 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     1355 | 2024-11-20 | G2 Esports    | L   | 0.530      | -            | -                | -                | -         |    -0.08 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     1601 | 2024-11-09 | Metizport     | L   | 0.453      | -            | -                | -                | -         |    -2.83 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     1618 | 2024-11-08 | Alliance      | W   | 0.446      | 0.488        | 0.015 (0.003)    | 0.595 (0.130)    | 1 (0.446) |     8.54 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     1935 | 2024-10-16 | JANO Esports  | L   | 0.293      | -            | -                | -                | -         |    -4.77 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     1939 | 2024-10-16 | B8            | L   | 0.292      | -            | -                | -                | -         |    -1.89 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     2219 | 2024-10-04 | ECSTATIC      | L   | 0.211      | -            | -                | -                | -         |    -2.88 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     3080 | 2024-09-07 | Team Falcons  | L   | 0.032      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3128 | 2024-09-05 | FaZe Clan     | L   | 0.020      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3170 | 2024-09-04 | Natus Vincere | L   | 0.013      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3210 | 2024-09-03 | Team Falcons  | W   | 0.005      | 1.000        | 0.927 (0.005)    | 0.744 (0.004)    | 1 (0.005) |     0.17 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,544.33)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.453 | $11,097.44     | $5,024.67       |
| 2024-10-20 |      0.319 | $5,000.00      | $1,594.10       |
| 2024-09-22 |      0.132 | $7,000.00      | $925.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
