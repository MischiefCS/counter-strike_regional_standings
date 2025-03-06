### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [78](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [54]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  791.5<br />
<br />
Final Rank Value (791.5) = Starting Rank Value (777.9) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.162[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.9
- 400 + ( ( 0.183 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 777.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1261 | 2024-11-24 | Team Spirit  | L   | 0.303      | -            | -                | -                | -         |    -0.01 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     1269 | 2024-11-23 | 9Pandas      | W   | 0.301      | 0.143        | 0.072 (0.003)    | 0.399 (0.017)    | 1 (0.301) |     6.64 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     1295 | 2024-11-22 | TSM          | W   | 0.295      | 0.143        | 0.002 (0.000)    | 0.084 (0.004)    | 1 (0.295) |     3.28 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     1326 | 2024-11-21 | Team Falcons | L   | 0.288      | -            | -                | -                | -         |    -0.02 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     1344 | 2024-11-21 | PARIVISION   | W   | 0.283      | 0.143        | 0.002 (0.000)    | 0.022 (0.001)    | 1 (0.283) |     2.89 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     1355 | 2024-11-20 | G2 Esports   | L   | 0.281      | -            | -                | -                | -         |    -0.10 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     1601 | 2024-11-09 | Metizport    | L   | 0.204      | -            | -                | -                | -         |    -1.78 | isak, jocab, MisteM, r1nkle, REZ |
|            3 |     1618 | 2024-11-08 | Alliance     | W   | 0.198      | 0.143        | 0.011 (0.000)    | 0.592 (0.017)    | 1 (0.198) |     3.65 | isak, jocab, MisteM, r1nkle, REZ |
|            2 |     1935 | 2024-10-16 | JANO Esports | L   | 0.044      | -            | -                | -                | -         |    -0.57 | isak, jocab, MisteM, r1nkle, REZ |
|            1 |     1939 | 2024-10-16 | B8           | L   | 0.043      | -            | -                | -                | -         |    -0.33 | isak, jocab, MisteM, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,621.24)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.204 | $11,097.44     | $2,268.81       |
| 2024-10-20 |      0.070 | $5,000.00      | $352.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
