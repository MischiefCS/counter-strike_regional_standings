### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: Angelka, D7, juliano, kyossa, vicu<br />
Global Rank: [97](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [68]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  803.3<br />
<br />
Final Rank Value (803.3) = Starting Rank Value (785.4) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.4
- 400 + ( ( 0.197 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 785.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      747 | 2025-02-05 | SAW                        | L   | 1.000      | -            | -                | -                | -         |    -2.88 | Angelka, D7, juliano, kyossa, vicu |
|           15 |      755 | 2025-02-05 | 500                        | L   | 1.000      | -            | -                | -                | -         |    -7.94 | Angelka, D7, juliano, kyossa, vicu |
|           14 |      893 | 2025-02-01 | Prototype Blaze            | W   | 1.000      | 0.143        | 0.058 (0.008)    | 0.161 (0.023)    | 0 (0.000) |    17.89 | D7, juliano, kyossa, vicu, wieenN  |
|           13 |     2334 | 2024-11-24 | FURIA Esports Female       | L   | 0.552      | -            | -                | -                | -         |    -4.96 | Angelka, ASTRA, D7, Hanka, vicu    |
|           12 |     2387 | 2024-11-23 | Fluxo Demons               | W   | 0.546      | 0.524        | 0.018 (0.005)    | 0.213 (0.061)    | 1 (0.546) |     8.12 | Angelka, ASTRA, D7, Hanka, vicu    |
|           11 |     2403 | 2024-11-23 | FlyQuest RED               | W   | 0.544      | 0.524        | 0.007 (0.002)    | 0.048 (0.014)    | 1 (0.544) |     5.43 | Angelka, ASTRA, D7, Hanka, vicu    |
|           10 |     2458 | 2024-11-22 | Imperial Female            | L   | 0.537      | -            | -                | -                | -         |    -3.79 | Angelka, ASTRA, D7, Hanka, vicu    |
|            9 |     3460 | 2024-10-20 | Let Her Cook               | W   | 0.320      | 0.328        | 0.002 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     2.96 | Angelka, ASTRA, D7, Hanka, vicu    |
|            8 |     3476 | 2024-10-19 | K27 Female                 | L   | 0.313      | -            | -                | -                | -         |    -6.56 | Angelka, ASTRA, D7, Hanka, vicu    |
|            7 |     3497 | 2024-10-18 | Team Denmark (Female team) | W   | 0.306      | 0.328        | 0.010 (0.001)    | 0.062 (0.006)    | 0 (0.000) |     3.54 | Angelka, ASTRA, D7, Hanka, vicu    |
|            6 |     3894 | 2024-10-02 | Team Spirit Female         | W   | 0.200      | 0.328        | 0.006 (0.000)    | 0.296 (0.019)    | 0 (0.000) |     2.01 | Angelka, ASTRA, D7, Hanka, vicu    |
|            5 |     4408 | 2024-09-18 | ENCE Athena                | W   | 0.106      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.61 | Angelka, ASTRA, D7, Hanka, vicu    |
|            4 |     4495 | 2024-09-15 | Imperial Female            | W   | 0.085      | 0.294        | 0.134 (0.003)    | 0.195 (0.005)    | 0 (0.000) |     2.07 | Angelka, ASTRA, D7, Hanka, vicu    |
|            3 |     4518 | 2024-09-14 | NIP Impact                 | W   | 0.079      | 0.294        | 0.011 (0.000)    | 0.056 (0.001)    | 0 (0.000) |     0.97 | Angelka, ASTRA, D7, Hanka, vicu    |
|            2 |     4531 | 2024-09-14 | Team Spirit Female         | W   | 0.078      | 0.294        | 0.006 (0.000)    | 0.296 (0.007)    | 0 (0.000) |     0.80 | Angelka, ASTRA, D7, Hanka, vicu    |
|            1 |     4769 | 2024-09-05 | NIP Impact                 | L   | 0.020      | -            | -                | -                | -         |    -0.38 | Angelka, ASTRA, D7, Hanka, vicu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,437.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $13,000.00     | $7,184.31       |
| 2024-09-15 |      0.085 | $3,000.00      | $253.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
